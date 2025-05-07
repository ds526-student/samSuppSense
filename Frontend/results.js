// // retrieve the result from the local storage
// const queryResult = JSON.parse(localStorage.getItem('queryResult'));

// // display result
// const resultsDiv = document.getElementById('results');
// if (queryResult && queryResult.length > 0) {
//     const product = queryResult[0];
//     const data = document.createElement('p');
//     data.textContent = `Product Name: ${product.ProductName}`;
//     resultsDiv.appendChild(data);


//     fetchIngredientIds(product.productId);
// } else {
//     resultsDiv.textContent = 'No results found.';
// }

// async function fetchIngredientIds() {
//     try {
//         // Fetch ingredient IDs
//         const ingredientIdsResponse = await fetch('http://localhost:3000/api/getIngredientIds', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ productId }),
//         });

//         if (!ingredientIdsResponse.ok) {
//             throw new Error('Failed to fetch ingredient IDs');
//         }


//     } catch (error) {
//         console.error(error);
//         alert('Error fetching ingredient IDs');
//     }
// }


// Retrieve the query result from localStorage
const queryResult = JSON.parse(localStorage.getItem('queryResult'));

// Display the result
const resultsDiv = document.getElementById('results');
if (queryResult && queryResult.length > 0) {
    const data = document.createElement('p');
    data.textContent = JSON.stringify(queryResult, null, 2); // Pretty-print JSON
    resultsDiv.appendChild(data);
} else {
    resultsDiv.textContent = 'No results found.';
}
