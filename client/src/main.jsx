import React from 'react';
import ReactDOM from 'react-dom/client';
// Self-hosted font, so the site doesn't depend on Google Fonts.
import '@fontsource-variable/geist/wght.css';
// Global styles load first so component styles can build on them.
import './styles/global.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
