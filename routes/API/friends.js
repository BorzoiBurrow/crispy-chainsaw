const express = require("express")
const router = require('express').Router();
router.use(express.json());
const Thought = require("../../models/thought")
const User = require("../../models/User")

// add a new friend
router.put('/users/:userId/friends/:friendId', async (req, res) => {
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
// delete a friend
  router.delete('/users/:userId/friends/:friendId', async (req, res) => {
    try {
      const { userId, friendId } = req.params;
      const user = await User.findByIdAndUpdate(userId, { $pull: { friends: friendId } }, { new: true });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
    res.status(200).json({ message: 'Friend removed successfully', updatedUser: user });
    } catch (error) {
      console.error(error);
      res.status(500).json({error});
    }
  });

module.exports = router;