window.onload = function pinSetAlready(){
    const showPin = document.getElementById("mySpan")
    const myPin = localStorage.getItem('pin')
    
    showPin.innerHTML = myPin
    // newShowPin.style.transition = "2s"

    
    const goBtn = document.getElementById("goToLogInBtn")
    goBtn.addEventListener("click", () =>{

    window.location = "../LOG-IN/index-login.html"
})
}


pinSetAlready()