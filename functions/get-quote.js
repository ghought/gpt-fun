const { OpenAIApi } = require('openai');

exports.handler = async (event, context) => {
  const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo-1106",
      prompt: "Provide an inspirational quote:",
      max_tokens: 60,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ quote: response.data.choices[0].text.trim() }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
