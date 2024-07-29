import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

    const firebaseConfig = {
    apiKey: "AIzaSyDI037oTQX4e6n_L0P-ZtxEpBPf68qb2IM",
    authDomain: "swift-bank-app.firebaseapp.com",
    projectId: "swift-bank-app",
    storageBucket: "swift-bank-app.appspot.com",
    messagingSenderId: "891242647976",
    appId: "1:891242647976:web:9f53898926245aa4784d9d"
  };


// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth()


function logIn(){
    // setTimeout(() => {
    // const load = document.querySelector(".loadingContainer")

    // }, 1000);
    
    

    setTimeout(() => {
        const logUserIn = document.querySelector(".myLogIn")
        logUserIn.addEventListener("submit", (e) => {
            e.preventDefault()

            const email = logUserIn.email.value
            const password = logUserIn.password.value

            signInWithEmailAndPassword(auth, email, password)
                .then((cred) => {
                    console.log(cred.user);
                    logUserIn.reset()
                    if (cred.user.emailVerified === false) {
                        window.location = "../DASHBOARD"
                    }
                })
                .catch((err) => {
                    console.log(err.message);
            })
        })
    
    }, 5000);
    
}

logIn()