//importing necessary modules
const express = require('express');
const router = express.Router();
const db = require('/db');

//testing get function
router.get('/', (req, res) => {
  res.status(200).json({ info: 'placeholder info blehblehblehblublublu' })
})

module.exports = router;