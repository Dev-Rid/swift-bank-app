window.onload = function dashboard() {

    const trs = document.getElementById("transfer")
    const air = document.getElementById("airtime")
    const sav = document.getElementById("savings")
    const his = document.getElementById("history")
    const acctNum = document.querySelector('#acctNumber')

    const myAcct = localStorage.getItem('acctNum')
    acctNum.innerHTML = myAcct

trs.addEventListener("click", () =>{
    window.location = "../TRANSFER"
})

air.addEventListener("click", () =>{
    window.location = "../airtime-top-up" 
})

his.addEventListener('click', () =>{
    window.location = "../history"
})


// dispName

const dispMyName = document.querySelector("#welc").innerText
const getFromLocalstorage = localStorage.getItem('dispName')

    dispMyName + ', ' + getFromLocalstorage
    // console.log( dispMyName + ', ' + getFromLocalstorage);


}

dashboard();

