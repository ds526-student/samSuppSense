document.getElementById('load').addEventListener('click', async () => {  
    const barcode = document.getElementById('inputText').value;
    
    try {
        const response = await fetch('http://localhost:3000/api/productSelect', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ barcode }),
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
    console.log(queryResult); // logs the query result to the console
    // display result
    const resultsDiv = document.getElementById('output');
    console.log('RESULTS DIV', resultsDiv);
    if (queryResult && queryResult.length > 0) {
        const product = queryResult[0]; // sets a variable equal to the product name
        const data = document.createElement('p'); // creates a new paragraph element
        data.textContent = `Product Name: ${product.ProductName}`;
        resultsDiv.appendChild(data);

        console.log('FETCHING INGREDIENTS');
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

});

    // displays the ingredients in the results div
    function displayIngredients(ingredients) {
        const ingredientsDiv = document.getElementById('output');

        if (ingredients && ingredients.length > 0) {
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