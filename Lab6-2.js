// Function to save form data to local storage
function saveToLocalStorage() {
    // Collecting The Data 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked')?.value;
    const age = document.getElementById("Age").value;
    const devices = Array.from(document.querySelectorAll('input[name="devices"]:checked')).map(cb => cb.value);
    const additionalInfo = document.getElementById("additionalInfo").value;
    const startDate = document.getElementById("startDate").value;
    const favcolor = document.getElementById("colorpicker").value;

    // Store Individual field value in local storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("number", number);
    localStorage.setItem("contactMethod", contactMethod || '');
    localStorage.setItem("age", age);
    localStorage.setItem("devices", JSON.stringify(devices));
    localStorage.setItem("additionalInfo", additionalInfo);
    localStorage.setItem("startDate", startDate);
    localStorage.setItem("favcolor", favcolor);

    alert("Your information has been saved!");
}

// Function to clear the form fields
function resetForm() {
    document.getElementById("contactForm").reset();
}

// Submit Button And Clear Button 
document.getElementById("submitButton").addEventListener("click", saveToLocalStorage);
document.getElementById("clearButton").addEventListener("click", resetForm);
