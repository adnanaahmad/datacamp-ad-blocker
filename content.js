(function() {
    'use strict';
  
    let initialUrl = window.location.href;
  
    const observer = new MutationObserver(function() {
        const element = document.querySelector('[data-testid="modal-overlay"]');
        if (element) {
            element.parentNode.removeChild(element);
        }
        if (window.location.href !== initialUrl) {
            window.history.go(0);
            initialUrl = window.location.href
        }
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  
    window.addEventListener('beforeunload', function(event) {
      observer.disconnect(); // Disconnect observer only on window close
    });
})();