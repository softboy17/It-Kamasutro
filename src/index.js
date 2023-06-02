import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import StoreContext from './StoreContext';
const root = ReactDOM.createRoot(document.getElementById('root'));




let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App/>
     </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );

}
rerenderEntireTree(store.getState())
store.subscribe(() =>{
  let state = store.getState()
  rerenderEntireTree(state) 
} )