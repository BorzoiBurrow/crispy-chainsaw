const router = require('express').Router();

router.get("/", (req,res) =>{
res.send("test from API")
})

module.exports = router;