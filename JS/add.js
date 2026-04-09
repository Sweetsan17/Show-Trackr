const addBtn = document.getElementById('add-btn');
const inputField = document.getElementById('name');
const messageDisplay = document.getElementById('message-display');

addBtn.addEventListener('click', () => {
    const showName = inputField.value.trim();
    
    // 1. Check if input is empty
    if (showName === "") {
        messageDisplay.innerText = "Please enter a name";
        messageDisplay.style.color = "orange";
        return;
    }

    // 2. Validate: Starts with a number or symbol?
    // ^[0-9] checks for numbers, \W checks for symbols (non-alphanumeric)
    const invalidPattern = /^[0-9\W_]/;

    if (invalidPattern.test(showName)) {
        messageDisplay.innerText = "Invalid TV Show name";
        messageDisplay.style.color = "red";
    } else {
        // 3. Success state
        messageDisplay.innerText = `${showName} has been added`;
        messageDisplay.style.color = "green";
        
        // Optional: Clear input after success
        inputField.value = "";
    }
});