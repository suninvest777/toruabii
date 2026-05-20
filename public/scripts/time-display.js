// Current Time Display - Shows "Open Now" status
(function() {
  'use strict';
  
  function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    
    const timeElements = document.querySelectorAll('.current-time');
    timeElements.forEach(el => {
      el.textContent = timeString;
    });
    
    // Show "Open Now" - 24/7 service
    const statusElements = document.querySelectorAll('.open-status');
    statusElements.forEach(el => {
      el.textContent = el.getAttribute('data-open-text') || 'Avatud nüüd';
      el.classList.add('text-green-500');
    });
  }
  
  // Update immediately and then every minute
  updateTime();
  setInterval(updateTime, 60000);
})();
