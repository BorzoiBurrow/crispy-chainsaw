const express = require("express")
const router = require('express').Router();
router.use(express.json());
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
// get single thought
  router.get('/thoughts/:thoughtId', async (req, res) => {
    try {
      const { thoughtId } = req.params;
      const thought = await Thought.findById(thoughtId);

      if (!thought) {
        return res.status(404).json({error:'no thought found.'});
      }
  
      res.status(200).json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json({error});
    }
  });

  // route to add a reaction to the thought
router.post('/thoughts/:thoughtId/reactions', async (req, res) => {
    try {
      const { thoughtId } = req.params;
      const { reactionText, username } = req.body;
      const thought = await Thought.findById(thoughtId);
  
      thought.reactions.push({ reactionText, username });
      await thought.save();
  
      res.status(201).json({ message: 'Reaction added!', updatedThought: thought });
    } catch (error) {
      console.error(error);
      res.status(500).json({error});
    }
  });
  
//   route to remove a reaction
  router.delete('/thoughts/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
      const { thoughtId, reactionId } = req.params;
      const thought = await Thought.findById(thoughtId);
  
      if (!thought) {
        return res.status(404).json({ error: 'no thought matching ID' });
      }
      const reactionIndex = thought.reactions.findIndex(reaction => reaction._id.equals(reactionId));
  
      if (reactionIndex === -1) {
        return res.status(404).json({ error: 'Reaction not found' });
      }

      thought.reactions.splice(reactionIndex, 1);
      await thought.save();
  
      res.status(200).json({ message: 'Reaction removed', updatedThought: thought });
    } catch (error) {
      console.error(error);
      res.status(500).json({error});
    }
  });

  
module.exports = router;