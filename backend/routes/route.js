require('dotenv').config();

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const investorAuthController = require('../controllers/investorAuthController');
const startupRegistrationController = require('../controllers/startupRegistrationController');
const contactController = require('../controllers/contactController');

// Sign-up route
router.post('/signup', authController.signup);

// Login route
router.post('/login', authController.login);

// Investors Login route
router.post('/investor-login', investorAuthController.login);

// Investors Sign-up route
router.post('/investor-signup', investorAuthController.signup);

// Startup Registration route
router.post('/startup-registration', startupRegistrationController.registerStartup);

router.get('/decodeToken', startupRegistrationController.decodedToken);

router.get('/fetchStartupsbyId', startupRegistrationController.getStartups);

router.get('/fetchStartups', startupRegistrationController.fetchAllStartups);

router.post('/contact', contactController.contactController1);

module.exports = router;
