const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', async (req, res) => {
  const queryRes = await User.find({ firstName: "Bob"});
  res.status(200).send(queryRes);
});

module.exports = router;