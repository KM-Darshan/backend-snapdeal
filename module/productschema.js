


const mongoose = require("mongoose");

// Define schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  img: {
    type: String, // URL for image
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  category: {
    type: String,
    default: "General"
  },
  inStock: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

// Create model
const Products = mongoose.model("Product", productSchema);

module.exports = Products


