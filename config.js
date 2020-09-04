import fb from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDBVeXSXh_pp2cAccn2m0IlY2HY1X7Q-2A",
    authDomain: "students-attendence.firebaseapp.com",
    databaseURL: "https://students-attendence.firebaseio.com",
    projectId: "students-attendence",
    storageBucket: "students-attendence.appspot.com",
    messagingSenderId: "188147063584",
    appId: "1:188147063584:web:15af0e413712e9ec6ed545",
    measurementId: "G-YE3HTSK955"
  };
  // Initialize Firebase
  fb.initializeApp(firebaseConfig);

  export default fb.database();
  