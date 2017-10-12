function KakiaReducer (state = [], action) {
  switch (action.type) {
    case 'ADD_KAKIA':
      // console.log('hello from kakia's reducer', action.school)
      return [...state, {
        name: action.name,
        school: action.school
      }]
      break

    case 'REMOVE_KAKIA':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
      break

    case 'EDIT_KAKIA':
      console.log('im at edit')
      return [
      ...state
    ]
      break
    default:
      return state
  }
};

export default KakiaReducer
