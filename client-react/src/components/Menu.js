//  Just getting started  //
import React from "react";
import axios from "axios";
import '../task.min.css'
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
        <h3>Menu</h3>
        <ul>
          {this.state.menuItems.map(p => (
            <li key={p.menuItemid}>
              {p.name} <button type="button" className="btn btn-primary">Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
