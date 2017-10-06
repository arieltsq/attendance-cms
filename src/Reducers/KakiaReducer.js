function KakiaReducer (state = [], action){
    switch (action.type) {
      case "ADD_KAKIA":
        return state;
      // case "DELETE_KAKIA":
      //   return state;
      // case "EDIT_KAKIA":
      //   return state;
      default:
        return state;
    }
  };
  
export default KakiaReducer