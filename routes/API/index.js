const router = require('express').Router();

// import the models to read.
const Thought = require("../../models/thought")
const User = require("../../models/User")

// get all thoughts.
router.get('/thoughts', async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {
      console.error(error);
      res.status(500).json({error});
    }
  });

// get all users.
router.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({error});
    }
  });

// post new user
// post new thought
module.exports = router;