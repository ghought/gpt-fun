// functions/get-quote.js

const { Configuration, OpenAIApi } = require("openai");

exports.handler = async function(event, context) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createCompletion("text-davinci-003", {
      prompt: "Provide an inspirational quote:",
      max_tokens: 60
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ quote: response.data.choices[0].text.trim() })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error retrieving quote." })
    };
  }
};
