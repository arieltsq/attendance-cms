function taoReducer (state = [], action) {
  switch (action.type) {
    case 'ADD_TAO':
      console.log('Adding Tao Triggered')
      return [
        ...state,
        {
          name: action.name,
          role: action.role
        }
      ]
    case 'DELETE_TAO':
      console.log('Deleting Tao Triggered')
      return [
        // from the start to the one we want to delete
        ...state.slice(0, action.index),
        // after the deleted one, to the end
        ...state.slice(action.index + 1)
      ]
    case 'EDIT_TAO':
      console.log(action.name, action.index)
      console.log('Editing Tao Triggered')
      const index = action.index
      return [
        ...state.slice(0, index), // before the one we are updating (referencing to the old one)
        {
          ...state[index],
          name: action.name,
          role: action.role
        }, // new number
        ...state.slice(index + 1) // after the one we are updating (referencing to the old one)
      ]
    default:
      return state
  }
}

export default taoReducer
