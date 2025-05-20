// retrieve the result from the local storage
//queryResult is an array holding (productId, productName)
const queryResult = JSON.parse(localStorage.getItem('queryResult'));
alert(JSON.stringify( queryResult ))

// display result
const resultsDiv = document.getElementById('results');
if (queryResult && queryResult.length > 0) {
    const product = queryResult[0]; // sets a variable equal to the product name
    const data = document.createElement('p'); // creates a new paragraph element
    data.textContent = `Product Name: ${product.ProductName}`;
    resultsDiv.appendChild(data);

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
        alert(JSON.stringify(ingredients))
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
            const ingredientContainer = document.createElement('div');
            ingredientContainer.style.display = 'flex';
            ingredientContainer.style.justifyContent = 'space-between';
            ingredientContainer.style.alignItems = 'center';
            ingredientContainer.style.marginBottom = '10px';

            const ingredientButton = document.createElement("button");
            ingredientButton.className = "ingredientButtons"
            ingredientButton.textContent = `Ingredient Name: ${ingredient.IngredientName}`;

            const infoText = document.getElementById("infoText");

            ingredientButton.onclick = () => updateButton(ingredient, infoText);

            ingredientContainer.appendChild(ingredientButton);

            ingredientsDiv.append(ingredientContainer);

        });
    } else {
        const noIngredients = document.createElement('p');
        ingredientsDiv.textContent = 'No ingredients found.';
        ingredientsDiv.appendChild(noIngredients);
    }
}

async function updateButton(ingredient, textContainer) {

    const entry = document.createElement("div");
    textContainer.appendChild(entry)

    const buttons = document.querySelectorAll(".ingredientButtons")

    buttons.forEach(btn => btn.disabled = true);
    

    try {
        const info = ingredient.IngredientName;

        const response = await fetch('/api/ai/processProductData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: info }) 
        });

        if (!response.ok) {
            throw new Error("Failed to fetch summary from server.");
        }

        const data = await response.json();

        entry.innerHTML = `
        <hr>
        <p <strong style ="color:#FF0000;">Ingredient:</strong><span style="font-weight: bold; color: #007bff;">${ingredient.IngredientName}</span></p>
        <p style="margin-top: 5px;">${data.summary || "No summary found."}</p>
        `;

        textContainer.scrollTop = textContainer.scrollHeight;
    } catch (error) {
        textContainer.textContent = "Failed to get info.";
        console.error(error);
    }

    buttons.forEach(btn => btn.disabled = false);

}
