const form = document.querySelector(`#form`);
const email = document.querySelector(`#email-address`);
const password = document.querySelector(`#password`);
let Success=true;

function click() {
    validateInputs();
}

function validateInputs(){
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

    if(emailVal===""){
        Success=false;
       setError(emailVal,"your email address is required")
    }
    else{
        setSuccess(email)
    }

    if(passwordVal===""){
        Success=false;
       setError(password,"password is required")
    }else if(passwordVal.length<8){
        Success=false;
       setError(password,"password must be 8 charactus")
    }
    else{
        setSuccess(password)
    }
}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(`.error`);

    errorElement.innerText = message;
    inputGroup.classList.add(`error`);
    inputGroup.classList.remove(`success`);
    
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(`.error`);

    errorElement.innerText = " ";
    inputGroup.classList.add(`success`);
    inputGroup.classList.remove(`error`);
    
}