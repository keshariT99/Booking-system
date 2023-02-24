const express = require('express');
const router = express.Router();
const {uploadi} = require('../../BACKEND/middlewares/upload');
const {register} = require('../../BACKEND/controller/auth');
const {upload} = require('../../BACKEND/controller/upload');

// User registration endpoint
router.post('/register', register);

// Image upload endpoint
router.post('/upload', uploadi.single('image'), upload);

module.exports = router;
