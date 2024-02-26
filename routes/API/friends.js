const express = require("express")
const router = require('express').Router();
router.use(express.json());
const Thought = require("../../models/thought")
const User = require("../../models/User")

router.put('/users/:userId/add-friend/:friendId', async (req, res) => {
    try {
      const { userId, friendId } = req.params;
  
      const user = await User.findById(userId);
      const friend = await User.findById(friendId);
  
      if (!user || !friend) {
        return res.status(404).json({ error: 'User and/or friend does not exist'});
      }

      user.friends.push(friendId);
      await user.save();
  
      res.status(200).json({ message: 'Friend added successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({error});
    }
  });

module.exports = router;