function onAddListItemButtonClick(){
    let addListItemInput = document.getElementById("addListItemInput");
    let addListItemInputText = addListItemInput.value;
    
    let listItem = document.createElement("li");
    listItem.textContent = addListItemInputText;
    listItem.classList.add("blueText");

    let skillList = document.getElementById("skillList");
    skillList.appendChild(listItem);
}

function onRemoveListItemButtonClick(){
    let skillList = document.getElementById("skillList");
    console.log(skillList);
    let lastElement = skillList.lastElementChild
    console.log(lastElement != null);
    if (lastElement) {
        skillList.removeChild(lastElement);
    }
}