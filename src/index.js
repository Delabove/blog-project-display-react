import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import "typeface-roboto";


ReactDOM.render(
  <React.StrictMode>
  <HashRouter basename="/blog-project-display-react">
      <App />
  </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

