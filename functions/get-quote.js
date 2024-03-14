const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.handler = async () => {
  try {
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo", // Make sure to replace with the correct model for your key.
      prompt: "Provide an inspirational quote:",
      max_tokens: 60,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ quote: completion.data.choices[0].text.trim() }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
