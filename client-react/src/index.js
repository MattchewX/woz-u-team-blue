import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Home from './components/Home';
import AddMenuItem from './components/AddMenuItem';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//import React from 'react';
//import { render } from 'react-dom'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
