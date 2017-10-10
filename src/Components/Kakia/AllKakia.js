import React, { Component } from 'react'
import Kakia from './Kakia'
import { Link } from 'react-router-dom'

// import { Switch, Route } from "react-router-dom";

export default class AllKakia extends Component {
  constructor (props) {
    super(props)

    // this.state = {
    //   props
    // }
  }
  componentWillMount () {
    console.log('testing', this.props.kakias)
  }
  render () {
        // const hello = this.props.hello;
    // const bye = this.props.bye;

    // const {
    //   // from s
    //   // kakias,
    //   // hello,
    //   // bye

    //   // from d

    // } = this.props

    const kakias = this.props.kakias
    return (
      <div>
        {/* <Link to='/Addkakias'><button>Add Kakias</button></Link> */}
        {
          kakias.map((kakia, index) =>
            <Kakia key={index}
              kakia={kakia}
             />)
        }
      </div>
    )
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
