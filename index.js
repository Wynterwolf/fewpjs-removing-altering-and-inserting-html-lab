// Write your code here!
//remove main
var element = document.getElementById("H1")
element.parentNode.removeChild(element)

//create h1 with id
let newHeader = document.createElement("h1");
newHeader.innerHTML = "Samantha is the champion"
newHeader.id = victory