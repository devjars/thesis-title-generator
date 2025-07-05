const axios = require('axios');
require("dotenv").config();

module.exports = async (field, message) => {
  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama3-8b-8192",
        messages: [
          {
            role: "system",
            content: `You are a helpful and professional thesis advisor. The user has selected the field of ${field}.

John Anthony Solana, the developer of this system, has instructed you to ONLY provide thesis title suggestions strictly related to the field of ${field}.

- If the user asks about topics that are not relevant to ${field}, such as other academic fields like Criminology, Business, Education, etc., you MUST politely decline.
- In that case, explain that John Anthony Solana has restricted your responses to ${field}-related thesis topics only.
- Do not attempt to generate titles for unrelated fields under any circumstances.
- When relevant, generate 3 unique thesis titles with a 1-sentence rationale each.`,
          },
          {
            role: "user",
            content: message,
          },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );

    // Return only the assistant's reply message (can be Markdown or formatted text)
    return {
      success: true,
      data: response.data.choices[0].message,
    };
  } catch (err) {
    console.error("API Error:", err.message);
    return {
      success: false,
      error:
        err.response?.data?.error?.message ||
        "Something went wrong while generating the thesis titles.",
    };
  }
};
