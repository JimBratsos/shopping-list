var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function deleteButton(){
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete Me"));
	btn.onclick=removeParent;
	return btn;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	li.appendChild(deleteButton());
}

function addItemAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addItemAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


ul.onclick = function(event){
	event.target.classList.toggle("done");
}


//Thanks to DOMEvents on GitHub 

function removeParent(event){
	event.target.parentNode.remove();
} 

//

for (var i = 0; i < 6; i++) {
	document.querySelectorAll("li")[i].appendChild(deleteButton());
}

button.addEventListener("click", addItemAfterClick);


input.addEventListener("keypress", addItemAfterKeypress);