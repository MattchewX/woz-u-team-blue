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
          <nav className="navbar navbar-dark bg-dark box-shadow fixed-top">
            <div className="container d-flex justify-content-between">
              <div className="navbar-brand d-flex align-items-center">
                <Link to="/" className="navbar-brand d-flex align-items-center"> 
                <strong>Piper's Pizza!</strong>
                </Link>
              </div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" onClick={this.cartError}></span>
              </button>
            </div>
          </nav>
        </header>
        <br></br>
        <br></br>
        <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Our Menu</h1>
          <p className="lead text-muted">Welcome to Piper's Pizza! We have the best pizza. Don't buy other pizza. Thanks.</p>
        </div>
      </section>
      <div className="container">
        <div className="row">
        {this.state.menuItems.map(p => (
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
            <div key={p.id} className="card-header">
                <h1 className="card-title">{p.name}</h1>
              </div>
              <div className="card-body">
                <p className="card-text">{p.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                  <button type="button" className="btn btn-md btn-primary" onClick={this.cartError}>Add to Cart</button>
                  </div>
                <small class="text">${p.price}</small>
                </div>
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
