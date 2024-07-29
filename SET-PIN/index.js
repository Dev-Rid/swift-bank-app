function pin() {
    const btn = document.getElementById("pinBtn")

    btn.addEventListener("click", () =>{
        
        const pinHere = document.getElementById("pinHere")
        
        if (pinHere.value === "") {
            alert("input 4-digits pin")
        } else {
            console.log("available");
            window.location = "../generated-pin/index.html"
            localStorage.setItem("pin", pinHere.value)
        }

    })
}


pin()


