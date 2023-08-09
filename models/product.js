const express = require("express");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "price must be provided"],
  },
  featured: {
    type: Boolean,
    default: true,
  },
  rating: {
    type: Number,
    default: 4.8,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  comapny: {
    type: String,
    enum: {
      values: ["apple", "samsung", "iphone", "infinix"],
      message: `{values} is not supported `,
    },
  },
});
module.exports = mongoose.model("product",productSchema)