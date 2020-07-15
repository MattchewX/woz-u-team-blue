import React from "react";
import axios from "axios";
import '../task.min.css'
import './home.css'


class Home extends React.Component {
  constructor (props) {
   super(props);
  }
  componentDidMount() {}
  render() {
   return (
//<div id= "test">Home Page In Progress</div>


<wrapper>
      <div class="header">

    
    <div class="row">
  <div class="col-4">
    <ul>
      Piper's Pizza
    </ul>
    </div>

     <img class="col-4"
              src="https://files.slack.com/files-pri/T0ECY9XMK-F01602XBNFQ/scottish-bagpiper-piper-in-national-clothes-vector-13914275.jpg" alt="null"/>


<div class="col-4">
    <ul>
      (1-800-PIPERSPIZZA)
    </ul>          
  </div>
  </div>
</div>
</wrapper>


    


   );
  }
 }
export default Home;