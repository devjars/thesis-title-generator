const axios = require('axios');
require("dotenv").config();
module.exports = async (topic, content) => {
  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: 'llama3-8b-8192',
        messages: [
          {
            role: 'system',
            content: `You are a helpful assistant that generates thesis titles for a person with a topic of ${topic}. If the user asks something not related to thesis titles, politely explain that you only talk about ${topic}-related thesis topics.`,
          },
          {
            role: 'user',
            content: `${content}`,
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.API_KEY}`,
        },
      }
    );

    return { success: true, data: response.data.choices[0].message };
  } catch (err) {
    console.error(err.message);
    return { success: false, error: 'Something went wrong.' };
  }
};
