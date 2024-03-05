const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  Message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    default: 'Visitor',
  },
});

module.exports = mongoose.model('contact', contactSchema);
