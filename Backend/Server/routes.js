//importing necessary modules
const express = require('express');
const router = express.Router();
//const db = require('/db');


// Handle submission of input
router.post('/submit', (req, res) => {
  const { userInput } = req.body;
  storedInput = userInput;
});

// Serve back stored input
router.get('/result', (req, res) => {
  res.json({ result: storedInput });
});

module.exports = router;