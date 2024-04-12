import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AccountProvider from './context/AccountProvider';
import {Toaster} from 'react-hot-toast'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AccountProvider>
    <App />
    <Toaster />
  </AccountProvider>
  
);

