import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import {store} from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  // provider store'ların tüm sayfada kullanılmasını sağlar 
  <Provider store={store}>
    <App />
  </Provider>
);