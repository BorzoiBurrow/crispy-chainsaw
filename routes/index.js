const express = require('express');
const router = express.Router();

const friendsRoutes = require('./API/friends'); 
const UserRoutes = require("./API/users")
const ThoughtRoutes = require("./API/thoughts")

// router end points for searches.
router.use('/api', friendsRoutes); 
router.use('/api', UserRoutes); 
router.use('/api', ThoughtRoutes)

module.exports = router;