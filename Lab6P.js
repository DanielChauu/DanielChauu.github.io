

// Naviagation part Where you are able to move to different links when clicked 
document.getElementById('navItem1').addEventListener('click', function() {
    window.location.href = 'Lab5_ITM780.html' })

document.getElementById('navItem2').addEventListener('click', function() {
    window.location.href = 'Index.html' })

document.getElementById('navItem3').addEventListener('click', function() {
    window.location.href = 'Contact.html' })

    // Drop Down menu on the Naviagation bar 
function showDropdown() {
    document.getElementById("dropdown").classList.add("show") }

function hideDropdown() {
    document.getElementById("dropdown").classList.remove("show")}
   




