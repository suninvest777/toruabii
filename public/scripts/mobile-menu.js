// Mobile Menu - Vanilla JS
(function() {
  'use strict';
  
  const menuButton = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  
  if (menuButton && menu) {
    menuButton.addEventListener('click', function() {
      const isOpen = menu.classList.contains('hidden');
      
      if (isOpen) {
        menu.classList.remove('hidden');
        menuButton.setAttribute('aria-expanded', 'true');
      } else {
        menu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
        menu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
