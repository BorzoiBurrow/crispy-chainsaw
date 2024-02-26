const express = require('express');
const router = express.Router();
const Routes = require("./API")
const friendsRoutes = require('./API/friends'); 

// router end points for searches.
router.use('/api', Routes);
router.use('/api', friendsRoutes); 


module.exports = router;