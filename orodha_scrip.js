//iife -Immidietllt Invoked FunctionExpression
(() => {
    //state variables
    let toDoListArray = [];
    //UI variables
    const form = document.querySelector('.form');
    const input = form.querySelector('.form_input');
    const ul = document.querySelector('.toDoList');

    //Adding event listeners
    form.addEventListener("submit", (e) => {
        //ptrevent defaultt behavior -page reloading 
        e.preventDefault ();    
        //give item a unique id 
    let itemId = string(Date.now())
//Get or assign inout value
    let toDoItem = input.value;

//pass ID or item into function
    addItemToDOM(itemId,toDoItem);
    addItemToArray(itemId,toDoItem);
    //clear input box. (Default behaviour anyway)
    input.valUe = "";
});

ul.addEventListener("click", (e) => {
    let id = e.target.getAttribute("data-id");
    if (!id) return; //User clicked something else
//Pass Id through to functions 
    removeItemFromDOM(id);
    removeItemFromArray(id);
});
//Functions
function addItemToDOM (itemId, toDoItem) {
    const li = document.createElement ("li");
    li.setAttribute ("data-id",itemId);
    //add to do item to li
    li.innerText = toDoItem;
    //Add li to DOM
    ul.appendChild(li);
}

function addItemToArray(itemId, toDoItem) {
    //adda item to array as an object with an id so as to find it later 
    toDoListArray.push({itemId,toDoItem});
    console.log(toDoListArray);
}

function removeItemFromDOM (id) {
    //get list item by data id 
    var li = document.querySelector('[data id ="'+id+'"]');
    //remove list item
    ul.removeChild(li);
}
function removeItemFromArray(id) {
    tnameoDoListArray = toDoListArray.filter(
        (item) => item.itemId !== id);
    console.log(toDoListArray);
}

})();
























