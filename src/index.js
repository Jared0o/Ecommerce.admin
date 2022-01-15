import App from './views/App';
import React from 'react';
import ReactDOM from 'react-dom';
import AppProvider from 'providers/AppPrivder';

import 'assets/styles/fonts.css';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
