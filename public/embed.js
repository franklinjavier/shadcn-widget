(function() {
  const currentScript = document.currentScript;
  const WIDGET_URL = currentScript ? new URL(currentScript.src).origin : window.location.origin;

  function loadWidget() {
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
