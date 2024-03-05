const bcrypt = require('bcrypt');
const Investor = require('../models/investorModel');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const expireAge = 1 * 60 * 60;

const createToken = (id, email, type) => {
  return jwt.sign({ id, email, type}, 'Aryan secret key', {
    expiresIn: expireAge,
  });
};

// Signup controller
const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const type = 'investor';

    // Check if the user already exists
    const existingUser = await Investor.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Investor already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newInvestor = new Investor({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the DB
    await newInvestor.save();
    const token = createToken(newInvestor._id, email, type);
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: expireAge * 1000,
      secure: process.env.NODE_ENV === 'production', // Enable secure cookie in production
    });

    res.status(201).json({ message: 'Investor signed up successfully', investorId: newInvestor._id });

  } catch (error) {
    console.error('Error during sign-up', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Login controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const type = 'investor';

    // Find user by email
    const investorUser = await Investor.findOne({ email });

    // Check if the user exists
    if (!investorUser) {
      return res.status(401).json({ error: 'Invalid Credentials' });
    }

    // Compare entered password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, investorUser.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid Credentials' });
    }

    const token = createToken(investorUser._id, email, type);
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: expireAge * 1000,
      secure: process.env.NODE_ENV === 'production', // Enable secure cookie in production
    });

    res.status(200).json({ message: 'User logged in successfully', token });
  } catch (error) {
    console.error('Error during login: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { signup, login };
