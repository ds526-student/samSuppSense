require('dotenv').config();

const OpenAI = require('openai');
const client = new OpenAI({apiKey: process.env.OpenAI_API_KEY,}); 

async function getSummary(ingredient) {
  const prompt = `Summarize the effects of the following ingredient on the human body: ${ingredient} sum it up in a max of 3 lines`;

  const response = await client.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
  });

  return response.choices[0].message.content;
}

module.exports = getSummary;