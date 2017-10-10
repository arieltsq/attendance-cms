import React, { Component } from "react";
import Kakia from "./Kakia";
import { Link } from 'react-router-dom';

// import { Switch, Route } from "react-router-dom";

export default class AllKakia extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   props
    // }
  }
  componentWillMount() {
    console.log(this.props.kakias);
  }
  render() {
    const props = this.props;
    return (
      <div>
        <Link to='/Addkakias'><button>Add Kakias</button></Link>
        {props.kakias.map((kakia, index) => <Kakia key={index} {...props} kakia={kakia} />)}
        
      </div>
    );
  }
}

// const AllKakia = props => {
//   return (
//     <div>
//       {props.kakias.map((kakia, index) =>
//         <Kakia {...props} key={index} kakia={kakia} />
//       )}
//     </div>
//   );
// };
