// all the reference needed
const listDiv = document.getElementById("ingredientList");
const textBox = document.getElementById("MessageTextArea");
const submitButton = document.getElementById("submitButton");


let currentIngredient = null;

// set the textbox to null if there is not current ingredient
if(currentIngredient == null){
    textBox.value = null;
}

let AllIngredients = [];


async function fetchAllIngredients(params) {

    try{
        // get all ingredients in the database
        const response = await fetch('/api/db/getAllMessages',{
            method: 'POST',
            headers: {'Content-type': 'application/json'}
        });

        // upload the array
        const data = await response.json();
        AllIngredients = data;

        // display all the ingredients
        if(AllIngredients && AllIngredients.length > 0){
            displayIngredients();
        }
    }catch(error){
        console.log(error);
    }
}

function displayIngredients(){
    // for all the ingredients in the list
    AllIngredients.forEach(ingredient =>{
        // create a button
        const ingredientButton = document.createElement("button");
        ingredientButton.className = "ingredientButtons"
        ingredientButton.textContent = `Ingredient Name: ${ingredient.IngredientName}`;
        ingredientButton.style.display = 'flex';
        ingredientButton.style.justifyContent = 'space-between';
        ingredientButton.style.alignItems = 'center';
        ingredientButton.style.marginBottom = '10px';
        ingredientButton.style.width = '100%';

        // add button to the ingredients
        listDiv.append(ingredientButton);

        ingredientButton.onclick = () => displayMessage(ingredient);
    });

}


function displayMessage(ingredient){
    // sets the current ingredient
    currentIngredient = ingredient;

    // display the messages in the text box
    textBox.value = currentIngredient.Message;

    // disable all the buttons
    const buttons = document.querySelectorAll(".ingredientButtons")
    buttons.forEach(btn => btn.disabled = true);

}

// check if the submit button gets pressed
if (submitButton) {
    submitButton.addEventListener('click', saveMessageChanges);
}
if(exitButton){
    exitButton.addEventListener('click', exitMessage);
}

function exitMessage(){
    currentIngredient = null;
    textBox.value = null;
    const buttons = document.querySelectorAll(".ingredientButtons")
    buttons.forEach(btn => btn.disabled = false);
}


async function saveMessageChanges(){
    if (!currentIngredient) {
        return;
    }

    // get the new message
    const newMessage = textBox.value;

    // get ingredient name
    const ingredientName = currentIngredient.IngredientName;

    try{
        const response = await fetch('/api/db/modifyMessageForIngredient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    IngredientName: ingredientName,
                    Message: newMessage
                }),
            });

        const result = await response.json();

        if(response.ok){
            console.log("Message updated successfully");
        }else{
            console.log("Failed to save message")
        }
    }catch(error){
        console.error("error " , error);
    }
    // reset the textbox and reenable the buttons
    textBox.value = null;
    const buttons = document.querySelectorAll(".ingredientButtons")
    buttons.forEach(btn => btn.disabled = false);
}


fetchAllIngredients();