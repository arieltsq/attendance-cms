import React from 'react'
// import { connect } from 'react-redux';
// import { addKakia } from '../../actions/actions';
// import { removeKakia } from '../../actions/actions';
// import Kakia from './Kakia';
// import { Link } from 'react-router-dom';

// pick things from the state
// const mapStateToProps = (state) => {
//     return {
//         kakias: state.kakias
//     }
// }
// // dispatching the action to the store
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addKakia: (kakiaDetails) => {dispatch(addKakia(kakiaDetails))},
//         removeKakia: (index) => {dispatch(removeKakia(index))}
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AddKakias);

const AddKakia = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input type='text' name='name' placeholder="Kakia's name" onChange={props.onChange} value={props.name} />
        <input type='text' name='school' value={props.school} placeholder="Kakia's School" onChange={props.onChange} />
        <button>Add Kakia</button>
      </form>
    </div>
  )
}
export default AddKakia
