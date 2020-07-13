//  Just getting started  //
import React from "react";
import axios from "axios";
import '../menu.min.css'
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuItems: [] };
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

  render() {
    return (
      <div>
        <h1>Piper's Pizza!</h1>
        <h3 className="text-center">This be our Menu</h3>
        <div>
          <div>
            <div className="container">
              <div className="card-deck mb-3 text-center">
              {this.state.menuItems.map(p => (
                <div className="card mb-4 box-shadow">
                  <div key={p.menuItemid} className="card-header">
                    <h1 className="card-title">{p.name}</h1>
                    <button type="button" className="btn btn-lg btn-block btn-primary">Add to Cart</button>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
