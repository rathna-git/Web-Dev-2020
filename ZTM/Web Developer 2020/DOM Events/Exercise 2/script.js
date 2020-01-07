var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector('li');


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var newButton = document.createElement('button');
	var listId = (new Date()).getTime();

	li.appendChild(document.createTextNode(input.value));
	li.setAttribute('id', listId);
	li.onclick = addToggle;

	newButton.setAttribute('id', 'delete');
	newButton.appendChild(document.createTextNode('Delete'));
	newButton.onclick = deleteItem;

	li.appendChild(newButton);
	ul.appendChild(li);

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addToggle(e){
	var li = e.target;
	li.classList.toggle('done');
}

function deleteItem(e){
	var li = e.target.parentElement;
	ul.removeChild(li);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
