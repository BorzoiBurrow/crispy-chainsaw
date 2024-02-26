const express = require("express")
const router = require('express').Router();
router.use(express.json());
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

// post new thought
router.post('/thoughts', async (req, res) => {
    try {
      const { thoughtText, username } = req.body;
      if (!thoughtText || !username) {
        return res.status(400).json({ error: 'Must have a valid user and content.' });
      }
      const newThought = new Thought({
        thoughtText,
        username,
      });
      const savedThought = await newThought.save();
      res.status(201).json(savedThought);
    } catch (error) {
      console.error(error);
      res.status(500).json({error});
    }
  });

// post new user
router.post('/users', async (req, res) => {
    try {
      const { username, email } = req.body;
      if (!username || !email) {
        return res.status(400).json({ error: 'Username and email are required' });
      }
      const newUser = new User({
        username,
        email,
      });
      const createUser = await newUser.save();
      res.status(201).json(createUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({error});
    }
  });

// delete thoughts
  router.delete('/thoughts/:thoughtId', async (req, res) => {
    try {
      const { thoughtId } = req.params;
      const deletedThought = await Thought.findByIdAndDelete(thoughtId);
      if (!deletedThought) {
        return res.status(404).json({error: 'Thought not found'});
      }
      res.status(200).json({ message: 'success!', deletedThought });
    } catch (error) {
      console.error(error);
      res.status(500).json({error});
    }
  });

// delete users
router.delete('/users/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted!', deletedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({error});
  }
});

// update username
router.put('/users/:userId/username', async (req, res) => {
    try {
      const { userId } = req.params;
      const { newUsername } = req.body;
  
      if (!newUsername) {
        return res.status(400).json({error:'New Username is required for swap.'});
      }

      const updatedUser = await User.findByIdAndUpdate(userId, { username: newUsername }, { new: true });
      if (!updatedUser) {
        return res.status(404).json({error});
      }

      res.status(200).json({ message: 'Username updated!', updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({error});
    }
  });
module.exports = router;