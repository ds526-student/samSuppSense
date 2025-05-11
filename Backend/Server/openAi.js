const { fetchIngredientsFromDB } = require('./database');

// call the function in database.js
async function processIngredients(productId) {
  try {

    // use the variable ingredients to do any processing 
    const ingredients = await fetchIngredientsFromDB(productId);
    //  

    console.log('Ingredients:', ingredients);
    return ingredients;
  } catch (err) {
    console.error('Database error:', err);
    throw err;
  }
}

