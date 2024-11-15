const { Schema, model } = require('mongoose');

const creatorSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = model('Creator', creatorSchema);