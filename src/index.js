import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './state';



ReactDOM.render(
  
    <App footer={state.footer} itemsForSlider={state.itemsForSlider}  menuCol={state.menuCol}/>,document.getElementById('root')
);

reportWebVitals();
