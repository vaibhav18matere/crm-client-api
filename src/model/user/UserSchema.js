const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    maxLength: 50,
    require: true,
  },
  company: {
    type: String,
    maxLength: 70,
    require: true,
  },
  address: {
    type: String,
    maxLength: 150,
  },
  phone: {
    type: Number,
    maxLength: 10,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    minLength: 8,
    maxLength: 20,
    require: true,
  },
});

module.exports = {
  UserSchema: mongoose.model("User", UserSchema),
};
