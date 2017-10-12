function KakiaReducer (state = [], action) {
  switch (action.type) {
    case 'ADD_KAKIA':
      // console.log('hello from kakia's reducer', action.school)
      return [
        ...state,
        {
          name: action.name,
          school: action.school
        }
      ]
      

    case 'REMOVE_KAKIA':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
      

    case 'EDIT_KAKIA':
      console.log('im at edit')
      const index = action.index
      return [
        ...state.slice(0, index),
        {
          ...state[index],
          name: action.name,
          school: action.school
        },
        ...state.slice(index + 1)
      ]
      
    default:
      return state
  }
};

export default KakiaReducer
