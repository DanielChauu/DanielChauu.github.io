
function enlargeText() {document.body.style.fontSize = "25px";}


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


function showAltText(imageId, altTextId) {
      const altTextElement = document.getElementById(altTextId); altTextElement.style.display = altTextElement.style.display === "none" ? "block" : "none";}

