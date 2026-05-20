/**
 * Test script for call button tracking
 * Run this in browser console to test all call buttons
 */
(function() {
  'use strict';

  console.log('🧪 Starting call button tracking test...');

  // Find all tel: links
  const telLinks = document.querySelectorAll('a[href^="tel:"]');
  
  console.log(`📞 Found ${telLinks.length} call button(s) on this page`);

  if (telLinks.length === 0) {
    console.warn('⚠️ No call buttons found on this page!');
    return;
  }

  // Test each button
  telLinks.forEach((link, index) => {
    const href = link.getAttribute('href');
    const text = link.textContent.trim() || link.innerText.trim();
    
    console.log(`\n🔘 Button ${index + 1}:`);
    console.log(`   Href: ${href}`);
    console.log(`   Text: ${text}`);
    console.log(`   Element:`, link);

    // Simulate click event
    try {
      const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });
      
      // Dispatch the event
      link.dispatchEvent(clickEvent);
      console.log(`   ✅ Click event dispatched`);
    } catch (error) {
      console.error(`   ❌ Error dispatching click:`, error);
    }
  });

  // Test API endpoint directly
  console.log('\n🌐 Testing API endpoint directly...');
  
  const testData = {
    url: window.location.href,
    userAgent: navigator.userAgent,
    timestamp: new Date().toLocaleString('ru-RU', { 
      timeZone: 'Europe/Tallinn',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  };

  fetch('/api/track-call', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(testData),
  })
  .then(response => {
    console.log(`   API Response Status: ${response.status}`);
    return response.json();
  })
  .then(data => {
    console.log(`   API Response Data:`, data);
    if (data.success) {
      console.log('   ✅ API test successful! Check Telegram for notification.');
    } else {
      console.warn('   ⚠️ API returned success: false');
    }
  })
  .catch(error => {
    console.error('   ❌ API test failed:', error);
  });

  console.log('\n✅ Test completed! Check Telegram bot for notifications.');
  console.log('📱 If notifications appear in Telegram, tracking is working correctly.');
})();
