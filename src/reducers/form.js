const initialState = {
  name: '',
  school: '',
  description: '',
  id: null
}

function formReducer (state = initialState, action) {
  switch (action.type) {
    case 'NEW_GINNAH':
      // console.log('hello from kakia's reducer', action.school)
      return {
        ...state,
        name: action.name,
        school: action.school,
        description: action.description,
        id: null
      }

    case 'EDIT_GINNAH':
      return {
        ...state,
        name: action.name,
        school: action.school,
        description: action.description,
        id: action.id
      }
    default:
      return state
  }
};

export default formReducer
