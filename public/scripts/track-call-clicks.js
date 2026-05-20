/**
 * Track call button clicks and send notifications to Telegram
 */
(function() {
  'use strict';

  /** Lead source for toruabii.ee (blue markers in Telegram). */
  var SITE_SOURCE = 'toruabii.ee';

  if (typeof window === 'undefined') return;

  async function trackCallClick(pageUrl, telHref, userAgent, retryCount) {
    retryCount = retryCount || 0;
    const maxRetries = 2;
    const timeout = 5000; // 5 seconds timeout
    
    try {
      const timestamp = new Date().toLocaleString('ru-RU', { 
        timeZone: 'Europe/Tallinn',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      const trackingData = {
        source: SITE_SOURCE,
        url: pageUrl,
        tel: telHref,
        userAgent: userAgent,
        timestamp: timestamp
      };

      console.log('[Call Tracking] 📞 Button clicked - sending data:', {
        source: SITE_SOURCE,
        url: pageUrl,
        tel: telHref,
        timestamp: timestamp,
        retry: retryCount
      });

      // Create abort controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      try {
        const response = await fetch('/api/track-call', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Site-Source': SITE_SOURCE
          },
          body: JSON.stringify(trackingData),
          signal: controller.signal,
          // Don't wait for response - fire and forget to not block the call
          keepalive: true
        });

        clearTimeout(timeoutId);

        const result = await response.json().catch(() => ({}));

        if (response.ok && result.success) {
          console.log('[Call Tracking] ✅ Success:', result);
        } else {
          console.warn('[Call Tracking] ⚠️ Failed:', {
            status: response.status,
            statusText: response.statusText,
            error: result.error || result.detail || 'Unknown error',
            requestId: result.requestId,
            retry: retryCount
          });

          // Retry on server errors (5xx) or network errors
          if ((response.status >= 500 || response.status === 0) && retryCount < maxRetries) {
            console.log(`[Call Tracking] 🔄 Retrying... (${retryCount + 1}/${maxRetries})`);
            setTimeout(() => trackCallClick(pageUrl, telHref, userAgent, retryCount + 1), 1000 * (retryCount + 1));
          }
        }
      } catch (fetchError) {
        clearTimeout(timeoutId);
        
        if (fetchError.name === 'AbortError') {
          console.warn('[Call Tracking] ⏱️ Request timeout after', timeout, 'ms');
        } else {
          throw fetchError; // Re-throw to be caught by outer catch
        }
      }
    } catch (error) {
      // Always log errors in production for debugging
      console.error('[Call Tracking] ❌ Error:', {
        message: error.message,
        name: error.name,
        stack: error.stack,
        retry: retryCount,
        url: pageUrl
      });

      if (retryCount < maxRetries && (error.name === 'TypeError' || error.name === 'NetworkError')) {
        console.log(`[Call Tracking] 🔄 Retrying after network error... (${retryCount + 1}/${maxRetries})`);
        setTimeout(() => trackCallClick(pageUrl, telHref, userAgent, retryCount + 1), 1000 * (retryCount + 1));
      }
    }
  }

  // Function to handle click on tel: links
  function handleCallClick(event) {
    const target = event.currentTarget || event.target;
    const href = target.getAttribute('href') || target.closest('a')?.getAttribute('href');
    
    // Check if it's a tel: link
    if (href && href.startsWith('tel:')) {
      const currentUrl = window.location.href;
      const userAgent = navigator.userAgent;
      
      // Track the click (non-blocking)
      trackCallClick(currentUrl, href, userAgent);
      
      // Don't prevent default - let the browser handle the tel: link normally
    }
  }

  // Test API endpoint availability
  async function testAPIEndpoint() {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout for test
      
      const testResponse = await fetch('/api/track-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: SITE_SOURCE,
          url: 'test',
          userAgent: 'diagnostic-test',
          timestamp: new Date().toISOString()
        }),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      console.log('[Call Tracking] 🔍 API endpoint test:', {
        available: true,
        status: testResponse.status,
        statusText: testResponse.statusText
      });
      
      return testResponse.ok || testResponse.status < 500;
    } catch (error) {
      if (error && error.name === 'AbortError') {
        console.warn('[Call Tracking] ⚠️ API endpoint test timeout');
      } else {
        console.warn('[Call Tracking] ⚠️ API endpoint test failed:', {
          error: error && error.message ? error.message : String(error),
          name: error && error.name ? error.name : 'Unknown'
        });
      }
      return false;
    }
  }

  // Wait for DOM to be ready
  function initTracking() {
    // Find all tel: links
    const telLinks = document.querySelectorAll('a[href^="tel:"]');
    
    // Always log initialization in production for debugging
    console.log('[Call Tracking] 🔧 Initialized:', {
      buttonsFound: telLinks.length,
      page: window.location.pathname,
      hostname: window.location.hostname,
      userAgent: navigator.userAgent.substring(0, 50)
    });
    
    // Test API endpoint availability (non-blocking)
    testAPIEndpoint().catch(() => {
      // Ignore test errors
    });
    
    // Add click listeners to all tel: links
    telLinks.forEach((link, index) => {
      // Skip if already tracked to avoid duplicates
      if (link.hasAttribute('data-tracked')) {
        return;
      }
      
      // Mark as tracked before adding listener
      link.setAttribute('data-tracked', 'true');
      
      // Remove existing listener if any (to avoid duplicates)
      link.removeEventListener('click', handleCallClick);
      // Add new listener
      link.addEventListener('click', handleCallClick, { passive: true });
      
      // Log button registration
      console.log(`[Call Tracking] 🔘 Button ${index + 1} registered:`, link.getAttribute('href'));
    });

    // Also handle dynamically added links (for SPA-like behavior)
    const observer = new MutationObserver(() => {
      const newTelLinks = document.querySelectorAll('a[href^="tel:"]:not([data-tracked])');
      newTelLinks.forEach(link => {
        // Mark as tracked before adding listener
        link.setAttribute('data-tracked', 'true');
        link.addEventListener('click', handleCallClick, { passive: true });
        console.log('[Call Tracking] 🔘 Dynamic button registered:', link.getAttribute('href'));
      });
    });

    // Observe changes in the document
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTracking);
  } else {
    initTracking();
  }
})();
