document.getElementById('load').addEventListener('click', async () => {  
    const productName = document.getElementById('inputText').value;
    
    try {
        const response = await fetch('http://localhost:3000/api/getProductId', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productName }),
        });
    
        if (!response.ok) {
            throw new Error('Failed to fetch product data');
        }
        const queryResult = await response.json();
        localStorage.setItem('queryResult', JSON.stringify(queryResult));


    } catch (error) {
        console.error(error);
        alert('Error fetching product data');
    }

    const queryResult = JSON.parse(localStorage.getItem('queryResult'));
    // display result
    const resultsDiv = document.getElementById('output');
    if (queryResult && queryResult.length > 0) {
        const data = document.createElement('p'); // creates a new paragraph element
        data.textContent = `Product Name: ${document.getElementById('inputText').value}`;
        resultsDiv.appendChild(data);

        localStorage.setItem('queryResult', JSON.stringify(queryResult));

        fetchIngredients();
    } else {
        resultsDiv.textContent = 'No results found.';
    }
});

// fetches the ingredients from the database and displays themn
async function fetchIngredients() {
    try {
        const queryResult = JSON.parse(localStorage.getItem('queryResult'));
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
        alert('Error fetching ingredient IDs(input.js)');
    }
}

// adds an ingredient to the product
document.getElementById('Add').addEventListener('click', async () => {  
    const productName = document.getElementById('inputText').value; // gets the product name from the text box
    const ingredientName = document.getElementById('addIngredient').value; // gets the ingredient name from the text box

    try {
        // finds the productID based on the product name in the text box
        const productIdResponse = await fetch('http://localhost:3000/api/getProductId', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productName }),
        });

        response = await productIdResponse.json();
        product = response[0].ProductID;

        // finds the ingredientID based on the ingredient name in the text box
        const ingredientIdResponse = await fetch('http://localhost:3000/api/getIngredientId', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ingredientName }),
        });

        response = await ingredientIdResponse.json();
        ingredient = response[0].IngredientID;

        // adds the new ingredient to the product_ingredients table
        const addResponse = await fetch('http://localhost:3000/api/addIngredientToProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ProductID: product, IngredientID: ingredient }),
        });

        // fetches and displays all ingredients to a paragraph
        fetchIngredients();
    } catch (error) {
        console.error(error);
        alert('Error adding ingredient to product');
    }
    
});

// displays the ingredients in the results div
function displayIngredients(ingredients) {
    const ingredientsDiv = document.getElementById('output');
    ingredientsDiv.innerHTML = ''; // Clear previous content

    if (ingredients && ingredients.length > 0) {
        const productItem = document.createElement('p');
        productItem.textContent = `Product Name: ${document.getElementById('inputText').value}`;
        ingredientsDiv.appendChild(productItem);

        ingredients.forEach(ingredient => {
            const ingredientItem = document.createElement('p');
            ingredientItem.textContent = `Ingredient Name: ${ingredient.IngredientName}`;
            ingredientsDiv.appendChild(ingredientItem);
        });
    } else {
        const noIngredients = document.createElement('p');
        ingredientsDiv.textContent = 'No ingredients found.';
        ingredientsDiv.appendChild(noIngredients);
    }
}