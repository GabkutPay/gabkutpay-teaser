// ✅ BACKEND – models/DocumentVerificationLog.js

const mongoose = require('mongoose');

const DocumentVerificationLogSchema = new mongoose.Schema({
  documentId: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
  userAgent: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('DocumentVerificationLog', DocumentVerificationLogSchema);
