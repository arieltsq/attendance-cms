function ginnahReducer (state = [], action) {
  switch (action.type) {
    case 'ADD_GINNAH':
      console.log('Adding Ginnah Triggered')
      return [
        ...state,
        {
          name: action.name,
          school: action.school,
          description: action.description
        }
      ]
    case 'DELETE_GINNAH':
      console.log('Deleting Ginnah Triggered')
      return [
        // from the start to the one we want to delete
        ...state.slice(0, action.index),
        // after the deleted one, to the end
        ...state.slice(action.index + 1)
      ]
    case 'EDIT_GINNAH':
      console.log(action.name, action.index)
      console.log('Editing Ginnah Triggered')
      const index = action.index
      return [
        ...state.slice(0, index), // before the one we are updating (referencing to the old one)
        {
          ...state[index],
          name: action.name,
          school: action.school,
          description: action.description
        }, // new number
        ...state.slice(index + 1) // after the one we are updating (referencing to the old one)
      ]
    default:
      return state
  }
}

export default ginnahReducer
