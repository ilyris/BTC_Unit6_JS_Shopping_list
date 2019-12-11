window.onload = () => {
    getTextFromInput();
}

const purchasedListArray = [];

function getTextFromInput() {
    let itemListArray = [];
    // Target the input and button
    const inputField = document.querySelector("input");
    const addItemButton = document.querySelector("button");

    // add listener to the button to fire the function and pass the input value in.
    addItemButton.addEventListener("click", () =>  {
        itemListArray = [...itemListArray, inputField.value]; 
        let newArray = Array.from(new Set(itemListArray))

        console.log(itemListArray);
        console.log(newArray);
        newArray.map( (items) => {
            return createShoppingList(items);
        })
        inputField.value = "";
    });
}

// Helper function that creates the LI
function createShoppingList(userInput) {
    //Create our element variables
    const orderedList = document.getElementById("item-list");
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox")

    // builds the li and append it to the item-list
    li.textContent =`${userInput}`;
    li.appendChild(checkbox)
    orderedList.appendChild(li);

    checkCheckbox(li);

}
function checkCheckbox(listItem) {
    const checkbox = document.querySelectorAll("li .checkbox");
    const orderedList = document.getElementById("item-list");
    const purchaseList = document.getElementById("item-purchased");
    
    checkbox.forEach( checkboxes => {
        checkboxes.addEventListener("click", (event) => {
            listItem.classList.toggle("purchased");
            if(listItem.classList.contains('purchased')) {
                purchaseList.appendChild(listItem);
                event.stopImmediatePropagation();
            } else if(!listItem.classList.contains('purchased')) {
                orderedList.appendChild(listItem);
                event.stopImmediatePropagation();
            }
        });
    });
}