const StartupRegistration = require('../models/startupRegistration');
const jwt = require('jsonwebtoken');

const expireAge = 1 * 60;

const registerStartup = async (req, res) => {
  // let userId;

  // const token = req.headers.authorization;
  // if (token) {
  //   jwt.verify(token, 'Aryan secret key', (err, decodedToken) => {
  //     if (err) {
  //       console.log('Failed to verify token:', err.message);
  //     } else {
  //       console.log(decodedToken);
  //       userId = decodedToken.id;
  //     }
  //   });
  // }

  // console.log(userId);

  try {
    const {
      userId,
      StartupName,
      startDate,
      endDate,
      CompanyName,
      FundingGoal,
      Description,
      CurrentFunding,
    } = req.body;

    const newStartupRegistration = new StartupRegistration({
      founderId: userId,
      StartupName,
      startDate,
      endDate,
      CompanyName,
      FundingGoal,
      Description,
      CurrentFunding,
    });

    await newStartupRegistration.save();

    res.status(201).json({
      message: 'Startup registered successfully',
      startupRegistration: newStartupRegistration,
    });
  } catch (error) {
    console.error('Error during startup registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const decodedToken = async (req, res) => {
  const token = req.headers.authorization;

  console.log(token);

  if (token) {
    try {
      const decodedToken = await jwt.verify(token, 'Aryan secret key');
      console.log(decodedToken);

      const userId = decodedToken.id;

      res.status(201).json({
        msg: `${userId}`,
      });
    } catch (err) {
      console.log('Failed to verify token:', err.message);
      res.status(401).json({ error: 'Failed to verify token' });
    }
  } else {
    res.status(401).json({ error: 'Token not provided' });
  }
};

const getStartups = async (req, res) => {
  try {
    const token = req.headers.authorization;
    
    // Decode the JWT to get the founder's ID
    const decodedToken = jwt.verify(token, 'Aryan secret key');
    const founderId = decodedToken.id;

    // Find startup registrations based on founderId
    const startups = await StartupRegistration.find({ founderId });

    res.status(200).json({ startups });
  } catch (error) {
    console.error('Error fetching startups:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const fetchAllStartups = async (req, res) => {
  try {
    const allStartups = await StartupRegistration.find({});

    res.status(200).json({ startups: allStartups });
  } catch (error) {
    console.error('Error fetching startups:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { registerStartup, decodedToken, getStartups, fetchAllStartups};
