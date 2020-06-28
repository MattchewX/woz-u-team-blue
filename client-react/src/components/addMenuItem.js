import React from "react";
import axios from "axios";
import '../task.min.css'
class addMenuItem extends React.Component {
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
    let url = "http://localhost:3001/tasks";
    axios.post(url, { name: this.menuItem.current.value }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.menuItemName.current.value = "";
    });
  };


  render() {
    return (
      <div>
        <h3>List of menuItems (React)</h3>
        <input ref={this.menuItem} />
        <button type="button" className="btn btn-primary" onClick={this.addMenuItem}>add</button>
        <ul>
          {this.state.menuItems.map(p => (
            <li key={p.menuItemId}>
              {p.name} : { p.description } {p.price} <button type="button" className="btn btn-success">Complete</button><button type="button" className="btn btn-danger">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default addMenuItem;
