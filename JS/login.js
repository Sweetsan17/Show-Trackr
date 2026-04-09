const form = document.querySelector(`#form`);
const email = document.querySelector(`#email-address`);
const password = document.querySelector(`#password`);

form.removeEventListener(`submit`,(e)=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(`.error`);

    errorElement.innerText = message;
    
}