import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Note: No CSS import here because style.css is linked in index.html

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/Ijordan4/my-portfolio">
    <App />
  </BrowserRouter>
);