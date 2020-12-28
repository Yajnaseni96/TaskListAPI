import React from 'react';
import ReactDOM from 'react-dom';
import { ReactReduxContext } from 'react-redux';
import App from './App';
import {Provider} from 'react-redux';
import store from './store/store';
import  '../node_modules/bulma/css/bulma.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


