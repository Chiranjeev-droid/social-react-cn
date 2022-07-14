import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import './index.css';
import { configureStore } from './Store';

const store = configureStore();
console.log('store', store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
