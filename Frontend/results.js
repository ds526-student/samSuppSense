// retrieve the result from the local storage
const queryResult = JSON.parse(localStorage.getItem('queryResult'));

// display result
const resultsDiv = document.getElementById('results');
if (queryResult && queryResult.length > 0) {
    const product = queryResult[0]; // sets a variable equal to the product name
    const data = document.createElement('p'); // creates a new paragraph element
    data.textContent = `Product Name: ${product.ProductName}`;
    resultsDiv.appendChild(data);

    fetchIngredients();
} else {
    resultsDiv.textContent = 'No results found.';
}

// fetches the ingredients from the database and displays themn
async function fetchIngredients() {
    try {
        const productId = queryResult[0].ProductID; // retrieves the productID
        // sends a POST request to the server with the productID
        const response = await fetch('http://localhost:3000/api/getIngredients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId }), 
        });

        if (!response.ok) {
            alert('Failed to fetch ingredient IDs(Response not OK)');
        }

        const ingredients = await response.json(); // retrieves the ingredient IDs from the server

        // displays the ingredients
        displayIngredients(ingredients);

    } catch (error) {
        console.log(error);
        alert('Error fetching ingredient IDs(results.js)');
    }
}

// displays the ingredients in the results div
function displayIngredients(ingredients) {
    const ingredientsDiv = document.getElementById('results');

    if (ingredients && ingredients.length > 0) {
        ingredients.forEach(ingredient => {
            const ingredientContainer = document.createElement('div');
            ingredientContainer.style.display = 'flex';
            ingredientContainer.style.justifyContent = 'space-between'
            ingredientContainer.style.alignItems = 'center'
            ingredientContainer.style.marginBottom = '10px'

            const ingredientItem = document.createElement('p');
            ingredientItem.textContent = `Ingredient Name: ${ingredient.IngredientName}`;

            const ingredientButton = document.createElement("button");
            ingredientButton.textContent = "display information:";

            const infoText = document.getElementById("infoText");

            ingredientButton.onclick = () => updateButton(ingredient, infoText)
                
            


            ingredientContainer.appendChild(ingredientItem);
            ingredientContainer.appendChild(ingredientButton);

            ingredientsDiv.append(ingredientContainer);

        });
    } else {
        const noIngredients = document.createElement('p');
        ingredientsDiv.textContent = 'No ingredients found.';
        ingredientsDiv.appendChild(noIngredients);
    }
}

async function updateButton(ingredient, text){
    text.textContent = "Loading...";

    try {
        const info = await getSummaryFromOpenAI([ingredient.IngredientName]); // pass as array
        text.textContent = info;
    } catch (error) {
        text.textContent = "Failed to get info.";
        console.error(error);
    }

}


async function getSummaryFromOpenAI(ingredients) {
    const prompt = `Summarize the effects of the following ingredients on the human body: ${ingredients.join(', ')}`;

    try {
    const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
        {
            role: 'user',
            content: prompt,
        },
        ],
    });

    return response.choices[0].message.content;
    } catch (error) {
        console.error('[openAi.js] Error from OpenAI:', error.response?.data || error.message || error);
        throw error;
    }
}