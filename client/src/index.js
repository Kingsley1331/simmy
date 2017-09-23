import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App'
import './style/index.css';
import { Provider } from "react-redux";

ReactDom.render(
  <Provider>
    <App />
  </Provider>,
 document.getElementById('root')
);
