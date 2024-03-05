const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const expireAge = 1 * 60 * 60;

const createToken = (id, email, type) => {
    return jwt.sign({ id, email, type }, 'Aryan secret key', {
        expiresIn: expireAge
    });
}

// Signup controller
const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const type = 'founder';

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save the user to the DB
        await newUser.save();
        const token = createToken(newUser._id, email, type);
        res.cookie('jwt', token, { httpOnly: true, maxAge: expireAge * 1000 });

        res.status(201).json({ message: 'User signed up successfully', user: newUser._id });

    } catch (error) {
        console.error('Error during sign-up', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Login controller
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });

        const type = 'founder';

        // Check if the user exists
        if (!user) {
            return res.status(401).json({ error: 'Invalid Credentials' });
        }

        // Compare entered password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid Credentials' });
        }

        const token = createToken(user._id, email, type);
        res.cookie('jwt', token, { httpOnly: true, maxAge: expireAge * 1000 });

        res.status(200).json({ message: 'User logged in successfully', token });
    } catch (error) {
        console.error('Error during login: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { signup, login };
