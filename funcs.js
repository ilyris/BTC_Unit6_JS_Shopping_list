window.onload = () => {
    getTextFromInput();
}

function getTextFromInput() {
    // Target the input and button
    const inputField = document.querySelector("input");
    const addItemButton = document.querySelector("button");

    // add listener to the button to fire the function and pass the input value in.
    addItemButton.addEventListener("click", () =>  {
        createShoppingList(inputField.value);
        inputField.value = "";
    });
}

function createShoppingList(userInput) {
    //Create our element variables
    const orderedList = document.getElementById("item-list");
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox")

    // Do something with those elements
    li.textContent =`${userInput}`;
    li.appendChild(checkbox)
    orderedList.appendChild(li);

    checkCheckbox(li);

}
function checkCheckbox(listItem) {
    const checkbox = document.querySelectorAll("li .checkbox");
    const purchaseList = document.getElementById("item-purchased");

    checkbox.forEach( checkboxes => {
        checkboxes.addEventListener("click", (event) => {
            if(event.target.checked) {
                listItem.style.background ="gray";
                purchaseList.appendChild(listItem);
                event.stopImmediatePropagation();
            }
        });
    });
}

// function checkCheckbox2(listItem) {
//     const checkbox = document.querySelectorAll("#item-purchased li .checkbox");
//     const orderedList = document.getElementById("item-list");

//     checkbox.forEach( checkboxes => {
//         checkboxes.addEventListener("click", (event) => {
//             if(event.target.checked == false) {
//                 listItem.style.background ="yellow";
//                 orderedList.appendChild(listItem);
//                 event.stopImmediatePropagation();
//             }
//         });
//     });
// }