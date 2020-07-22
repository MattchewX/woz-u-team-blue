import React from "react";
import axios from "axios";
import '../menu.min.css';
import '../menu.custom.css';
import { BrowserRouter as Link } from 'react-router-dom';
class AddMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuItems: [] };
    this.menuItemName = React.createRef();
  }

  componentDidMount() {
    this.getData();
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

  addMenuItem = () => {
    let url = "http://localhost:3001/menuItems";
    axios.post(url, { name: this.menuItemName.current.value }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.menuItemName.current.value = "";
    });
  };

  removeMenuItem = props => {
    let url = "http://localhost:3001/menuItems/" + props;
    axios.delete(url).then(response => {
      // refresh the data
      this.getData();
    });
  };

  updateMenuItem = props => {
    let url ="http://localhost:3001/menuItems/" + props;
    axios.put(url, newName).then(response => {
      this.getData();
    });
  };
  //placeholder for updateMenuItem

  render() {
    return (      
      <div>
        <header>
          <div className="navbar navbar-dark bg-dark box-shadow fixed-top">
            <div className="container d-flex justify-content-between">
            <div className="navbar-brand d-flex align-items-center">
                <Link to="/" className="navbar-brand d-flex align-items-center"> 
                <strong>Piper's Pizza!</strong>
                </Link>
              </div>
              <div className="navbar-brand d-flex align-items-center">Maintenance Mode</div>
            </div>
          </div>
        </header>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className="form-inline mt-2 mt-md-0 justify-content-center">
          <input className="form-control mr-sm-2" ref={this.menuItemName} placeholder="Item Name" />
          <button type="button" className="btn btn-primary" onClick={this.addMenuItem}>Add Item</button>
        </p>
        <div className="container">
        <div className="row">
        {this.state.menuItems.map(p => (
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <div key={p.id} className="card-header">
                <h1 className="card-title">{p.name}</h1>
                <button type="button" className="btn btn-lg btn-block btn-secondary">Edit</button>
                <button type="button" className="btn btn-lg btn-block btn-danger" onClick={this.removeMenuItem.bind(this, p.id)}>Remove</button>
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

export default AddMenuItem;
