import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PlayerSchema = new Schema({
  firstName: {
    type: String,
    required: "Please enter a name"
  },
  lastName: {
    type: String,
    required: "Please enter a lastname"
  },
  phone: {
    type: Number
    // required: "Please enter a phone"
  },
  email: {
    type: String,
    required: "Please enter a email"
  },
  iscoach: {
    type: Boolean,
    default: false
  },
  team: {
    type: String
  },
  speed: {
    type: Number,
    enum: [1, 2, 3]
  },
  strength: {
    type: Number,
    enum: [1, 2, 3]
  },
  endurance: {
    type: Number,
    enum: [1, 2, 3]
  },
  ability: {
    type: Number,
    enum: [1, 2, 3]
  },
  techniques: {
    type: Number,
    enum: [1, 2, 3]
  },
  tactical: {
    type: Number,
    enum: [1, 2, 3]
  },
  created_date: {
    type: Date,
    default: Date.now()
  }
});
