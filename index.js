// Write your code here!
//remove main
var element = document.getElementById("main")
element.parentNode.removeChild(element)

//create h1 with id n html
let newHeader = document.createElement("h1");
newHeader.innerHTML = "Samantha is the champion"
newHeader.id = "victory"