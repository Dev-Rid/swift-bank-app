import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getAuth, createUserWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js'

// Your web app's Firebase configuration
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


async function linkToOtherPage(){  
  
    const mySignUp = document.querySelector(".mySignUp")
    // mySignUp.addEventListener('submit', (e) => {
        // e.preventDefault()

        // const inpOne = document.getElementsByClassName("inpOne")
        // const inpTwo = document.getElementsByClassName("inpTwo")
        // const inpThree = document.getElementsByClassName("inpThree")
        // const inpFour = document.getElementsByClassName("inpFour")
                       
    // })
        

        // const Arr = []
        mySignUp.addEventListener('submit', (e)=> {
            e.preventDefault()
        
            const myFirstName = mySignUp.firstname.value
            const myLastName = mySignUp.lastname.value
            const confirmPassword = mySignUp.repeatpassword.value
            const email = mySignUp.email.value
            const password = mySignUp.password.value 


            // console.log(myFirstName, myLastName, confirmPassword);
        // ||object info||
        function maObjs(){
            const userObj = {
                firstName: myFirstName,
                second: myLastName,
                confPassword: confirmPassword,
            }
            console.log(userObj);
        }



        // ||local storage||
        const dispName = myFirstName
        localStorage.setItem('dispName', dispName)
   


        // ||authentication||
        function maAuth(){
            createUserWithEmailAndPassword(auth, email, password)
                .then((cred) => {
                    // console.log(cred.user.emailVerified);
                    // console.log(cred.user);

                    mySignUp.reset()
                    if (cred.user.emailVerified !== true) {
                        console.log("go to other window");
                        window.location = "../ACCT-NUM/index.html"
                    }

                })
                .catch((err) => {
                    console.log(err.message);
                })    
        }
        maAuth()
        maObjs() 
 
    })
}

linkToOtherPage()