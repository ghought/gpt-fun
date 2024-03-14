const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.handler = async (event, context) => {
  try {
    const chatCompletion = await openai.chat.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Tell me an inspirational quote.' }],
    });

    const quote = chatCompletion.data.choices[0].message.content;

    return {
      statusCode: 200,
      body: JSON.stringify({ quote }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
