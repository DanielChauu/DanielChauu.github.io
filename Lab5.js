document.getElementById("nameButton").addEventListener("click", function() {
    const userName = prompt("Please enter your name");
    document.getElementById("nameDisplay").textContent = `Hello, ${userName}! Welcome to the site.`})

    document.getElementById('navItem1').addEventListener('click', function() {
    window.location.href = 'Lab3_ITM780.html' })



    document.getElementById('photo').addEventListener('click', function() {
    const img = this;
    if (img.style.width === '400px') {img.style.width = '200px';} 
        else {img.style.width = '400px'} })



function showDropdown() {
    document.getElementById("dropdown").classList.add("show") }

function hideDropdown() {
    document.getElementById("dropdown").classList.remove("show")}



