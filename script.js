(() => {
    let toDoListArray =[];
    const form =document.querySelector(".form");
    const input = form.querySelector (".form_input");
    const ul = document.querySelector (".toDoList");

    form.addEventListener ("submit", (e)=> {
        e.preventDefault();              // prevents page reloading after pressing re-load button
        let itemId = String(Date.now());
        let toDoItem = input.Value;
        addItemToDOM (itemId,toDoItem);     //Document Object MOdel DOM
        addItemToArray(itemId,toDoItem);
        input.Value = "";
    })

    ul.addEventListener ('click', (e) => {
        let id =e.target.getAttribute("data_id");
        if (!id) return ;
        removeItemFromDOM(Id);
        removeItemFromArray(Id)

    });

    function addItemToDOM (itemId, toDoItem) {
    const li = document.createElement ("li");
    li.setArrayAttribute ('data-id', itemId);
    li.innerText = toDoItem;
    ul.appendChild(li);
    }

    function addItemToArray (itemId, toDoItem) {
        // Add items to array as an object with an ID so we can find and deete it later
        toDoListArray.push ({itemId, toDoItem});
        console.log (toDoListArray);
    }

    function removeItemFromDOM (id) {
        var li = document.querySelector ('[data-id = "' +  id + ' "]');
        //Remove item list
        ul.removeChild(li);
    }

    function removeItemFromArray(id) {
         // create a new toDoListArray with all li's that don't match the ID
    toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
    console.log(toDoListArray);   
    }

}) ();