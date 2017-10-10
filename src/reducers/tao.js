 function TaoReducer (state = [], action) {
   switch (action.type) {
     case 'ADD_TAO':
       return state
      // case "DELETE_TAO":
      //   return state;
      // case "EDIT_TAO":
      //   return state;
     default:
       return state
   }
 };

 export default TaoReducer
