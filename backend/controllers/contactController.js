const bcrypt = require('bcrypt');
const ContactModel = require('../models/contactModel');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const contactController1 = async (req, res) => {
    try {
        const { Name, Email, Message } = req.body;
        const newContact = new ContactModel({
            Name: Name,
            email: Email,
            Message: Message,
        });

        await newContact.save();

        res.status(201).json({
            message: "Message sent!"
        });
    } catch (error) {
        console.error('Error during contact form submission', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { contactController1 }; // Exporting the correct function name
