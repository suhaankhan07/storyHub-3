import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyC0nn8bR0cx5AXDDTW7BJMzvEGGODAA6yQ",
    authDomain: "storyhub-eb27d.firebaseapp.com",
    projectId: "storyhub-eb27d",
    storageBucket: "storyhub-eb27d.appspot.com",
    messagingSenderId: "1096370490463",
    appId: "1:1096370490463:web:51c2dc7481d1812f3c9fea"
  };
 //initalize firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
  