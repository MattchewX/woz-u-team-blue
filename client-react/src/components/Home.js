import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../task.min.css'
import './home.css'


class Home extends React.Component {
  constructor (props) {
   super(props);
  }
  componentDidMount() {}
  render() {
   return (

    


<body>
      <div class="wrapper">

    
    <div class="row" id="header">
  <div class="col-6">
    <h3>
    <ul>
      Piper's Pizza  <Link to="/addmenuitem">Maintenance</Link>|<Link to="/menu">Menu</Link>
    </ul>
    </h3>
    </div>
    <div class="col-6">
      <h3>
    <ul>
      (1-800-PIPERSPIZZA)
    </ul>
    </h3>
</div>
</div>


      <div class="pictures">
         <div class="row">
          <img class="col-4" src="images/pizza-3000273_1280.jpg"/>
          <img class="col-4" src="images/iStock-866244994.jpg"/>
          <img class="col-4" src="images/pizza-1179404_1280.jpg"/>
          </div>
          </div>
         

        


<div class="footer">
  <p>123 Piper Lane</p>
  <p>Piper City ,Piper Land USA</p>

  
</div>
</div>
</body>


    


   );
  }
 }
export default Home;