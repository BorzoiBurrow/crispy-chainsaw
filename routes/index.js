const express = require('express');
const router = express.Router();
const api = require("./API")
const Routes = require("./API")

router.use('/api', Routes);

module.exports = router;