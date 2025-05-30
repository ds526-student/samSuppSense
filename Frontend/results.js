// retrieve the result from the local storage
//queryResult is an array holding (productId, productName)
const queryResult = JSON.parse(localStorage.getItem('queryResult'));
//alert(JSON.stringify( queryResult ))

// display result
const resultsDiv = document.getElementById('results');
if (queryResult && queryResult.length > 0) {
    const product = queryResult[0]; // sets a variable equal to the product name
    const data = document.createElement('p'); // creates a new paragraph element
    data.id ="productName"
    data.textContent = `Product Name: ${product.ProductName}`;
    document.getElementById("main").insertBefore(data, document.getElementById("resultsDiv"));

    //run fetch ingredients then fetch summary in order
    fetchIngredients().then(fetchSummary).catch(error => {
    console.error("Error in chain:", error);
    });
} 
else {
    resultsDiv.textContent = 'No results found.';
}

// fetches the ingredients from the database and displays themn
async function fetchIngredients() {
    try {
        const productId = queryResult[0].ProductID; // retrieves the productID
        // sends a POST request to the server with the productID
        const response = await fetch('/api/db/getIngredients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId }), 
        });

        if (!response.ok) {
            alert('Failed to fetch ingredient IDs(Response not OK)');
        }

        ingredients = await response.json(); // retrieves the ingredient IDs from the server
        // displays the ingredients
        displayIngredients(ingredients);
        

    } catch (error) {
        console.log(error);
        alert('Error fetching ingredient IDs(results.js)');
    }
}

// async function fetchSummary(){

//     try {
//         const response = await fetch('api/ai/processProductData', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(ingredients),
//         });

//         if (!response.ok) {
//             const errorData = await response.json();  
//             alert(errorData.error || 'Failed to fetch summaries');
//         }

//         const ingredientsWithSummaries = await response.json(); 
//         alert(JSON.stringify(ingredientsWithSummaries));
//     } catch (error) {
//         console.log(error);
//         alert('Error fetching summary (results.js)');
//     }
     
// }

// displays the ingredients in the results div
function displayIngredients(ingredients) {
    const ingredientsDiv = document.getElementById('results');

    if (ingredients && ingredients.length > 0) {
        ingredients.forEach(ingredient => {
            // create a button for each ingredient
            const ingredientButton = document.createElement("button");
            ingredientButton.className = "ingredientButtons"
            ingredientButton.textContent = `Ingredient Name: ${ingredient.IngredientName}`;
            ingredientButton.style.display = 'flex';
            ingredientButton.style.justifyContent = 'space-between';
            ingredientButton.style.alignItems = 'center';
            ingredientButton.style.marginBottom = '10px';

            // get a reference to the info textbox
            const infoText = document.getElementById("infoText");

            // when the button gets clicked run the update button function
            ingredientButton.onclick = () => updateButton(ingredient, infoText);

            // add the button tot he ingredientsDiv
            ingredientsDiv.append(ingredientButton);

        });
    } else {
        const noIngredients = document.createElement('p');
        ingredientsDiv.textContent = 'No ingredients found.';
        ingredientsDiv.appendChild(noIngredients);
    }
}

async function updateButton(ingredient, textContainer) {

    // create a div to store the information for each message
    const entry = document.createElement("div");
    entry.className = "entry"
    // add the entry to the textbox
    textContainer.appendChild(entry)

    // disable all the buttons once a button has been pressed
    const buttons = document.querySelectorAll(".ingredientButtons")
    buttons.forEach(btn => btn.disabled = true);
    

    try {
        const ingredientName = ingredient.IngredientName;
        
        // try to get the message from the database
        let dbResponse = await fetch('/api/db/getMessage',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({IngredientName: ingredientName})
        });
        
        const dbData = await dbResponse.json();

        let summary;
        
        console.log("it actually gets here");
        // if that fails response would not exist
        if(dbData.exists){
            summary = dbData.message;
        }else{
            const response = await fetch('/api/ai/processProductData', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
            },
                body: JSON.stringify({ text: ingredientName }) 
            });

            if (!response.ok) {
                throw new Error("Failed to fetch summary from server.");
            }

            const aiData = await response.json(); 
            summary = aiData.summary;

            // add it to the database
            await fetch('/api/db/addEntryToMessages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ IngredientName: ingredientName, Message: summary })
            });
        }

        const htmlSummary = converToHtml(summary);


        // add the information to the entry
        entry.innerHTML = `
        <hr>
        <h3 class ="ingredientResultName"> Ingredient: ${ingredientName}</h3>
        <p class="ingredientResultText">${htmlSummary || "No summary found."}</p>
        `;

        // scroll to the top (would actually go to the bottom which is the latest)
        textContainer.scrollTop = textContainer.scrollHeight;
    } catch (error) {
        textContainer.textContent = "Failed to get info.";
        console.error(error);
    }

    // re-enable all of the buttons
    buttons.forEach(btn => btn.disabled = false);

}


// function to extract the links out of messages

function converToHtml(text){
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
}

