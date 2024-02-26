const express = require('express');
const router = express.Router();
const Routes = require("./API")
const friendsRoutes = require('./API/friends'); 
const UserRoutes = require("./API/users")
// router end points for searches.
router.use('/api', Routes);
router.use('/api', friendsRoutes); 
router.use('/api', UserRoutes); 


module.exports = router;