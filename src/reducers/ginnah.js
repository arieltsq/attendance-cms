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
      console.log('Editing Ginnah Triggered')
      return state
    default:
      return state
  }
}

export default ginnahReducer
