import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatWidget from './components/ChatWidget';
import './index.css';

const WIDGET_ID = 'chat-widget-root';

function initChatWidget() {
  if (document.getElementById(WIDGET_ID)) {
    return;
  }

  const container = document.createElement('div');
  container.id = WIDGET_ID;
  document.body.appendChild(container);

  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <ChatWidget />
    </React.StrictMode>
  );
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChatWidget);
} else {
  initChatWidget();
}

export { initChatWidget };
