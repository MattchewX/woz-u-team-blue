import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import Home from './components/Home';
import AddMenuItem from './components/AddMenuItem';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//import React from 'react';
//import { render } from 'react-dom';




const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AddMenuItem">AddMenuItem</Link>
        </li>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/AddMenuItem" component={AddMenuItem} />
      <Route path="/Menu" component={Menu} />
      <Route path="/Cart" component={Cart} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

