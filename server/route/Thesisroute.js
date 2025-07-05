const express = require("express");
const router = express.Router();
const ApiController = require("../controller/ApiController");

router.post('/thesis/title', async (req, res) => {
  const { field, message } = req.body;

  if (!field || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide the content."
    });
  }

  try {
    const result = await ApiController(field, message);

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
