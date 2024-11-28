


document.getElementById("nameButton").addEventListener("click", function() {
    const userName = prompt("Please enter your name");
    document.getElementById("nameDisplay").textContent = `Hello, ${userName}! Welcome to the site.`})


// Naviagation part Where you are able to move to different links when clicked 
document.getElementById('navItem1').addEventListener('click', function() {
    window.location.href = 'HomePage.html' })

document.getElementById('navItem2').addEventListener('click', function() {
    window.location.href = 'Portfolio.html' })

document.getElementById('navItem3').addEventListener('click', function() {
    window.location.href = 'Contact.html' })



    document.getElementById('photo').addEventListener('click', function() {
    const img = this;
    if (img.style.width === '400px') {img.style.width = '200px';} 
        else {img.style.width = '400px'} })


// Drop Down menu on the Naviagation bar 
function showDropdown() {
    document.getElementById("dropdown").classList.add("show") }

function hideDropdown() {
    document.getElementById("dropdown").classList.remove("show")}



/// Allows alt text to pop up when clicked
function showAltText(imageId, altTextId) {
    const altTextElement = document.getElementById(altTextId); 
    altTextElement.style.display = altTextElement.style.display === "none" ? "block" : "none";}


function showAudioAltText() {
    const altTextElement = document.getElementById("alt-text");
    if (altTextElement.style.display === "none" || altTextElement.style.display === "") {
        altTextElement.style.display = "block";
    } else {
        altTextElement.style.display = "none";
    }
}


///Enlarge text when button is clicked
function enlargeText() {
    if (document.body.style.fontSize === "25px") {
        document.body.style.fontSize = "16px"; 
    } else {
        document.body.style.fontSize = "25px"; 
    }
}


/// Changes the colour of the page when each button is clicked
 function setColorScheme(type) {
    if (type === 'normal') {
      document.body.style.color = "#000000 "; 
      document.body.style.backgroundColor = "#0000"; 
    } else if (type === 'deuteranopia') {
      document.body.style.color = "#0F4C81";
      document.body.style.backgroundColor = "#E4F5F9";
    } else if (type === 'protanopia') {
      document.body.style.color = "#2F4F4F ";
      document.body.style.backgroundColor = "#F0F8FF ";
    } else if (type === 'tritanopia') {
      document.body.style.color = "#2E2E2E  "; 
      document.body.style.backgroundColor = "#FAFAFA  ";}}
