import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
//import './index.css';
// import App from './App';
import store from './store';
import Dashboard from './Dashboard';


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')

);



