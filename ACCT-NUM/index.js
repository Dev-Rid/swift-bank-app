window.onload = function pageAccNumber(){

    setTimeout(() => {
        const onloadModal = document.getElementById("modal")
        onloadModal.style.display = "none"
    }, 35000000);


    setTimeout(() => {  
        const onloadSec = document.getElementById("create-container")
        onloadSec.style.display = "flex"

        function generateAcct() {
            const generateAcctNum = document.getElementById("generatedAcct")
            const generateAcct = Math.random() * 10 ** 16
            const changeNumToString = generateAcct.toString()
            const newChangeNumToString = changeNumToString.substr(1, 10)
            generateAcctNum.innerHTML = newChangeNumToString
        }   

        generateAcct()
        
    }, 3500);

}


function toSetPin() {
    const toDashBoardPage = document.getElementById("acctToDashPage")

    toDashBoardPage.addEventListener("click", () => {
        const setAcctToLocalStorage = document.querySelector('#generatedAcct')
        window.location = "../SET-PIN"
        localStorage.setItem('acctNum', setAcctToLocalStorage.innerHTML)
    })
}

toSetPin()




pageAccNumber()




