const bcrypt = require('bcryptjs');
const User = require('../models/user');

exports.register = async (req, res) => {
  try {
    // Hash password before saving to database
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create new user object
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });

    // Save user to database
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
};
