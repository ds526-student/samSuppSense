const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function getSummaryFromOpenAI(ingredients, papers) {
  const formatted = papers.map(p => `Title: ${p.title}\nAbstract: ${p.abstract}`).join('\n\n');
  const prompt = `Summarize the effects of the following ingredients on the human body: ${ingredients.join(', ')}\n\nUse the following research papers:\n\n${formatted}`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
  });

  return response.choices[0].message.content;
}

module.exports = { getSummaryFromOpenAI };
