function onAddListItemButtonClick(){
    let addListItemInput = document.getElementById("addListItemInput");
    let addListItemInputText = addListItemInput.value;
    
    let listItem = document.createElement("li");
    listItem.textContent = addListItemInputText;
    listItem.classList.add("blueText");

    let skillList = document.getElementById("skillList");
    skillList.appendChild(listItem);
}