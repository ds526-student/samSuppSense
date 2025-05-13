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
} 
else {
    resultsDiv.textContent = 'No results found.';
}

//gets the AI summary of the ingredients 
async function getIngredientSummary(productId) {
  try {
    const response = await fetch('/api/process-ingredients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId })
    });

    if (!response.ok) {
            alert('Failed to fetch ingredient IDs(Response not OK)');
    }
    
    const data = await response.json();
    displayIngredients(ingredients);


    console.log('Processed ingredients:', data);
  } catch (error) {
    console.error('Error:', error);
  }
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

//old display method

// // displays the ingredients in the results div
// function displayIngredients(ingredients) {
//     const ingredientsDiv = document.getElementById('results');

//     if (ingredients && ingredients.length > 0) {
//         ingredients.forEach(ingredient => {
//             const ingredientItem = document.createElement('p');
//             ingredientItem.textContent = `Ingredient Name: ${ingredient.IngredientName}`;
//             ingredientsDiv.appendChild(ingredientItem);
//         });
//     } else {
//         const noIngredients = document.createElement('p');
//         ingredientsDiv.textContent = 'No ingredients found.';
//         ingredientsDiv.appendChild(noIngredients);
//     }
// }

async function getIngredientSummary(productId) {
  try {
    const response = await fetch('/api/process-ingredients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch ingredient summaries');
    }
    
    const data = await response.json();
    displayIngredients(data); // Pass the actual response data
    
    console.log('Processed ingredients:', data);
  } catch (error) {
    console.error('Error:', error);
    alert(error.message); // Show actual error message
  }
}

// Updated display function to handle the new structure
function displayIngredients(ingredients) {
    const ingredientsDiv = document.getElementById('results');
    ingredientsDiv.innerHTML = ''; // Clear previous results

    if (ingredients && ingredients.length > 0) {
        ingredients.forEach(ingredient => {
            // Create container for each ingredient
            const ingredientContainer = document.createElement('div');
            ingredientContainer.className = 'ingredient-item';
            
            // Add name
            const nameElement = document.createElement('p');
            nameElement.textContent = `Ingredient: ${ingredient.name}`;
            nameElement.className = 'ingredient-name';
            
            // Add summary
            const summaryElement = document.createElement('p');
            summaryElement.textContent = `Summary: ${ingredient.summary}`;
            summaryElement.className = 'ingredient-summary';
            summaryElement.style.fontStyle = 'italic';
            
            // Append to container
            ingredientContainer.appendChild(nameElement);
            ingredientContainer.appendChild(summaryElement);
            ingredientsDiv.appendChild(ingredientContainer);
        });
    } else {
        const noIngredients = document.createElement('p');
        noIngredients.textContent = 'No ingredients found.';
        ingredientsDiv.appendChild(noIngredients);
    }
}

