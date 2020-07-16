//  Just getting started  //
import React from "react";
import axios from "axios";
import '../menu.min.css'
import Home from './Home';
import Cart from './Cart';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuItems: [] };
  }

  componentDidMount() {
    this.getData();
  }

  cartError() {
    alert("Sorry! Cart not yet implemented.")
  }

  getData = () => {
    // Java Spring Boot uses port 8080
    //let url = "http://localhost:8080/tasks";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    let url = "http://localhost:3001/menuItems";
    axios.get(url).then(response => this.setState({ menuItems: response.data }));
  };

  render() {
    return (
      <div>
        <header>
          <nav class="navbar navbar-dark bg-dark box-shadow fixed-top">
            <div class="container d-flex justify-content-between">
              <div class="navbar-brand d-flex align-items-center">
                <Link to="/" className="navbar-brand d-flex align-items-center"> 
                <strong>Piper's Pizza!</strong>
                </Link>
              </div>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon" onClick={this.cartError}></span>
              </button>
            </div>
          </nav>
        </header>
        <br></br>
        <br></br>
        <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Our Menu</h1>
          <p class="lead text-muted">Welcome to Piper's Pizza! We have the best pizza. Don't buy other pizza. Thanks.</p>
        </div>
      </section>
      <div className="container">
        <div className="row">
        {this.state.menuItems.map(p => (
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <div key={p.menuItemid} className="card-header">
                <h1 className="card-title">{p.name}</h1>
                <button type="button" className="btn btn-lg btn-block btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
    );
  }
}

export default Menu;
