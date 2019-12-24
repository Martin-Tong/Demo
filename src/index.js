import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router';
import * as serviceWorker from './serviceWorker';
import tim from "./script/tim"

import Welcome from './components/welcome'
ReactDOM.render(<Welcome />, document.getElementById('root-welcome'));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

window.onload = function() {
    let ele = document.querySelector('.loading-mask');
    ele.style.visibility = 'hidden'
}