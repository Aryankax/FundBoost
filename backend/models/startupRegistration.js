const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StartupRegistrationSchema = new Schema({
  founderId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  StartupName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  CompanyName: {
    type: String,
    required: true,
  },
  FundingGoal: {
    type: String, // Assuming FundingGoal should be a number
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  CurrentFunding: {
    type: String, // Assuming CurrentFunding should be a number
    required: true,
  },
});

module.exports = mongoose.model('StartupRegistration', StartupRegistrationSchema);
