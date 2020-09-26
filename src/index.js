import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "typeface-roboto";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/blog-project-display-react">
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

