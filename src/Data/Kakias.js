//seed data for Kakias
export const kakias = [
    {
        "kakia_index": 0, 
        "kakia_name": "Jonathan", 
        "kakia_school": "Temasek Polytechnic" 
    },
    {
        "kakia_index": 1, 
        "kakia_name": "Elnarth", 
        "kakia_school": "Singapore Polytechnic" 
    },
    {
        "kakia_index": 2, 
        "kakia_name": "Dee Tan", 
        "kakia_school": "Nanyang Polytechnic"
    }
];
export default kakias;



// function writeUserData(userId, name, school) {
//     firebase.database().ref('users/' + userId).set({
//       username: name,
//       school: school
//     });
//   }

//   writeUserData(1, "Isaac", "Temasek Poly");