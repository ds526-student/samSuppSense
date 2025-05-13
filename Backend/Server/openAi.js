const { fetchIngredientsFromDB } = require('./database.js');

  // call the function in database.js
async function processIngredientsWithAI(productId) {
  try {

    // use the variable ingredients to do any processing (the variable should be a json)
    ingredients = await fetchIngredientsFromDB(productId);
    

    // process the ingredients with OpenAI api
    const processedIngredients = [];

    //unpacking the json
    for(const ingredient of ingredients){
      //call method defined below to get summary
      const summary = await useOpenAIForSummary(ingredient.IngredientName);

      //adds formatted ingredients to the processedIngredients slist
      processedIngredients.push({
        //formats the ingredient and the summary
        name: ingredient.IngredientName,
        summary
      });
    }

      return processedIngredients;
    } 
    catch (err) {
      console.error('Database error:', err);
      throw err;
    }

    
  }

async function useOpenAIForSummary(ingredient) {
  // impelemnt openAI api here and then return the processed string
  // this is just a placehlder so that it returns something
  return "Sample summary for " + ingredient;
}
module.exports = {
  processIngredientsWithAI
};
