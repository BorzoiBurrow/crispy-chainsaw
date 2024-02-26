const express = require("express")
const router = require('express').Router();
router.use(express.json());
const Thought = require("../../models/thought")
const User = require("../../models/User")






module.exports = router;