var addButton = document.getElementById("addButton");
var userInput = document.getElementById("userInput");

function inputLength(){
    return userInput.value.length;
}

function createListElements(){
    var unorderedList = document.getElementById("listItems");
    var list = document.createElement("li");
    list.appendChild(document.createTextNode(userInput.value));
    list.className = "pointer";
    unorderedList.appendChild(list);
    document.getElementById("userInput").value = "";


    //creating button
    var delButton = document.createElement("button");
    delButton.appendChild(document.createTextNode("Delete"));
    list.appendChild(delButton);

    liEvent();
    delButtonEvent();
}

function addListAfterClick(){
    if(inputLength() > 0){
        createListElements();
    }
}

function addListAfterKeyPress(event){
     if(inputLength() > 0 && event.keyCode == "13"){
        createListElements();
    }
}

function strikeOffList(){
    console.log("strike off");
    li.classList.toggle("done");
}


addButton.addEventListener("click", addListAfterClick);
userInput.addEventListener("keypress", addListAfterKeyPress);

function liEvent(){
    var li = document.querySelectorAll("li");
    for(var i = 0; i < li.length; i++){
    li[i].onclick = function(event){
        event.target.classList.toggle("done");
    }
}
}

function delButtonEvent(){
    var button = document.querySelectorAll("button");
    for(var i = 0; i < button.length; i++){
    button[i].onclick = function(event){
        event.target.parentNode.remove();
    }
}
}

