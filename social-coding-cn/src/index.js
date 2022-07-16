import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import { Provider } from 'react-redux';
import './index.css';
import { configureStore } from './Store';

const store = configureStore();
console.log('store', store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
