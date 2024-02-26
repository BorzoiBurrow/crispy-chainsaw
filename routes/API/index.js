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
  
module.exports = router;