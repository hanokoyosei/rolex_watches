import firebase from 'firebase/compat/app';
import 'firebase/compat/app' ;
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAlCipeXhOy3DCIj7i2MDfclJrXitfXptY",
    authDomain: "jarim-sosisony-d7e51.firebaseapp.com",
    projectId: "jarim-sosisony-d7e51",
    storageBucket: "jarim-sosisony-d7e51.appspot.com",
    messagingSenderId: "892617598732",
    appId: "1:892617598732:web:f4d998dc1eb28ea01acb29"
  };
  
const fire = firebase.initializeApp(firebaseConfig);

export default fire;