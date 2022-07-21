//select items we need 
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul= document.querySelector("ul");

//function
function inputlength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; //make input empty to prevent multiple inputs
}

function addListAfterClick(){
        if(inputlength()>0){
            createListElement();
        }
}

//work for click button
button.addEventListener("click", addListAfterClick);

//Parenthesis () in JavaScript are used for function calls, to surround conditional statements

function afterKeyPress(event){
        console.log(event.which); //important 
        if(inputlength()>0 && event.keyCode === 13){ //or event.which
            createListElement();
        }
    
}
//work for enter
input.addEventListener("keypress", afterKeyPress)
