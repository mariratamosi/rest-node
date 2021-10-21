//what your db connects at

import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: "Enter a first name",
  },
  lastName: {
    type: String,
    required: "Enter a first name",
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
  Age: {
    type: Number,
  },
  create_at: {
    type: Date,
    default: Date.now(),
  },
});
