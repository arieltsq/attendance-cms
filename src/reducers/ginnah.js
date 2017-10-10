 function ginnahReducer (state = [], action) {
   switch (action.type) {
     case 'ADD_GINNAH':
       console.log('hello')
       return state
    // case "DELETE_GINNAH":
    //   return state;
    // case "EDIT_GINNAH":
    //   return state;
     default:
       return state
   }
 };

 export default ginnahReducer
