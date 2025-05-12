import { fetchIngredientsFromDB } from './database.js';

let ingredients = null;

// call the function in database.js
export async function processIngredients(productId) {
  try {

    // use the variable ingredients to do any processing 
    ingredients = await fetchIngredientsFromDB(productId);
    //  

    console.log('Ingredients:', ingredients);
    return ingredients;
  } catch (err) {
    console.error('Database error:', err);
    throw err;
  }
}





