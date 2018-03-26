import React from 'react';
import ReactDom from 'react-dom';
import App from './ui/components/App';
import './style/index.css';
import { Provider } from "react-redux";
import store from './ui/store';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('root')
);
