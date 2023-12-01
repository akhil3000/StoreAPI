const Joi=require('joi');
const mongoose = require('mongoose')

const productSchema =  new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name must be provided'],
  },
  price: {
    type: Number,
    required: [true, 'product price must be provided'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported',
    },
    // enum: ['ikea', 'liddy', 'caressa', 'marcos'],
  },
})

const dataToValidate = { 
  "name": "arm",
  "price": 125,
  "company": "marcos",
  "rating": 4.8 
}




// const result = Joi.validate(dataToValidate, schema);

module.exports = mongoose.model('Product', productSchema)
