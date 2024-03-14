const { OpenAI } = require('openai');

const openai = new OpenAI(process.env.OPENAI_API_KEY);

exports.handler = async (event, context) => {
  try {
    const response = await openai.Completion.create({
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
