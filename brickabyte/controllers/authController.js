const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const maxAge = 3 * 24 * 60 * 60
const createToken = (id) => {
  return jwt.sign({id}, 'secret', {
    expiresIn:maxAge
  })
}

module.exports.signup_get = (req, res) => {
  res.render('signup')
}

module.exports.signup_post = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password
    });

    await newUser.save();

    const token = createToken(newUser._id)

    res.cookie('jwt', token, {httpOnly:true,maxAge:maxAge})

    res.status(201).json({ message: 'User created successfully', newUser:newUser._id });

  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((error) => error.message);
      return res.status(400).json({ error: errors });
    }
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports.login_get = (req, res) => {
  res.render('login')
}

module.exports.login_post = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = createToken(user._id)

    res.cookie('jwt', token, {httpOnly:true,maxAge:maxAge})

    res.status(200).json({ message: 'Login successful', user:user._id });
  } catch (error) {
    console.error('Error logging in:', error);s
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports.logout_get = (req, res) => {
  res.cookie("jwt", '', {maxAge:1})
  res.redirect('/')
}

module.exports.Bricka_get = (req, res) => {
  const jwtCookie = req.cookies.jwt; 
  res.render('Bricka', { jwtCookie: jwtCookie });
}

