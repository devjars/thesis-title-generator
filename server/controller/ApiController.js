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
          content: `You are a helpful and professional thesis advisor. The user has selected the academic field of "${field}".

John Anthony Solana, the developer of this system, has instructed you to:
1. ONLY generate thesis title suggestions that are strictly related to the selected field: "${field}".
2. If the user asks for topics outside this selected field (e.g., requesting topics for other fields), you MUST politely decline and explain that your responses are limited to "${field}" only.
3. When the user first interacts, generate 3–5 unique and original thesis titles related to "${field}". Each title must include a concise, 1-sentence rationale.
4. If the user refers to a previously suggested title (e.g., "Tell me more about number 2" or pastes the title), provide a detailed explanation, including:
   - Background or context of the research
   - Clear research objectives
   - Suggested methodology or approach
   - Potential contributions or significance
5. Maintain a professional, supportive, and academic tone at all times.

Do not generate topics unrelated to "${field}" under any circumstances.`,
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
