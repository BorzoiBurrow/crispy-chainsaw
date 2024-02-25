const express = require('express');
const router = express.Router();
const Routes = require("./API")

// router end point for searches.
router.use('/api', Routes);

module.exports = router;