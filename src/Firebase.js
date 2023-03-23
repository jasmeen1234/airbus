// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUKl1wBo35fG7OygQnTQ_hTPXMavfZh6w",
    authDomain: "airbus-clone-7701f.firebaseapp.com",
    projectId: "airbus-clone-7701f",
    storageBucket: "airbus-clone-7701f.appspot.com",
    messagingSenderId: "270684723667",
    appId: "1:270684723667:web:d139f1507a8bf0841db726",
    measurementId: "G-Q680M3XH7N"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

export const auth=getAuth(app);
const provider=new GoogleAuthProvider()

export const signInwithGoogle =()=>{
    console.log("sign in")
    signInWithPopup(auth,provider)
    .then((result)=>{
        console.log(result);
        const name=result.user.displayName;
        localStorage.setItem("name", name);
        // console.log(localStorage.getItem("name"));
        window.location.reload(false);

    }).catch((error)=>{
        console.log(error);
    });
    
    
};