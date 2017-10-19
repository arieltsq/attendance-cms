import firebase from 'firebase'

var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: 'AIzaSyCtMZDjmlQeN2xZvekjVGt_ZFCJgSY0iIM',
  authDomain: 'attendance-d1ba0.firebaseapp.com',
  databaseURL: 'https://attendance-d1ba0.firebaseio.com',
  projectId: 'attendance-d1ba0',
  storageBucket: 'attendance-d1ba0.appspot.com',
  messagingSenderId: '955969681537'
}
firebase.initializeApp(config)
const database = firebase.database().ref('ginnahs')

export default database
// export default fire
