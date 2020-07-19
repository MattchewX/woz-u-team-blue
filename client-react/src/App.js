import React from "react";
import  Home from "./components/Home";
import "./App.css";
import AddMenuItem from './components/AddMenuItem';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={Home} />
          <Route path="/AddMenuItem" component={AddMenuItem} />
          <Route path="/Menu" component={Menu} />
          <Route path="/Cart" component={Cart} />
      </Router>
  </div>
  );
}

export default App;
