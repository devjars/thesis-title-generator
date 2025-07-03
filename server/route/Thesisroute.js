const express = require("express");
const router = express.Router();
const ApiController = require("../controller/ApiController");

router.post('/thesis/title', async (req, res) => {
  const { topic, content } = req.body;

  if (!topic || !content) {
    return res.status(400).json({
      success: false,
      message: "Please provide both topic and content."
    });
  }

  try {
    const result = await ApiController(topic, content);

    if (result && result.success) {
      return res.status(200).json({
        success: true,
        data: result.data
      });
    } else {
      return res.status(400).json({
        success: false,
        message: result.error || "Failed to generate thesis titles."
      });
    }

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
});

module.exports = router;
