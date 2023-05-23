import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

addPost('swd')

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App state = {state}  />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
