function KakiaReducer (state = [], action) {
  switch (action.type) {
    case 'ADD_KAKIA':
        // console.log("ASSSSSSSSSHHHHHOLLLEEEEEE", state)
      return [...state, action.kakiaDetails]
      // case "DELETE_KAKIA":
      //   return state;
      // case "EDIT_KAKIA":
      //   return state;
    default:
      return state
  }
};

export default KakiaReducer
