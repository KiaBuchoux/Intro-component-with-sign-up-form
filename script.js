document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault()
    const inputs = document.querySelectorAll("input")
    inputs.forEach( input => {
        if(!input.value){
            input.parentElement.classList.add("active")
        }else{
            input.parentElement.classList.remove("active")
            if(input.type === "email"){
                validateEmail(input.value) ? input.parentElement.classList.remove("active") : input.parentElement.classList.add("active")
            }
        }
    })
})


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };