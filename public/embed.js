(function () {
  const currentScript = document.currentScript;
  const WIDGET_URL = currentScript ? new URL(currentScript.src).origin : window.location.origin;

  function loadWidget() {
    // Load CSS first (file name will be updated by Vite plugin)
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = WIDGET_URL + '/assets/index-Hy0ttfAx.css';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    // Then load JavaScript
    const script = document.createElement('script');
    script.type = 'module';
    script.src = WIDGET_URL + '/widget.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    document.body.appendChild(script);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadWidget);
  } else {
    loadWidget();
  }
})();