const express = require('express');
const router = express.Router();
const multer = require('multer');
const {register, login} = require('../../BACKEND/controller/auth');
const {uploadFile} = require('../../BACKEND/controller/upload');
const {uploadMulter} = require('../../BACKEND/middlewares/upload');

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type'));
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });

// User registration endpoint
router.post('/register', upload.single('image'), register);

// User login endpoint
router.post('/login', login);

// Image upload endpoint
router.post('/upload', uploadMulter.single('image'), uploadFile);

module.exports = router;
