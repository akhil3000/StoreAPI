
//import { Schema } from "mongoose";

const Joi=require('joi');
// const productSchema=require('../models/product');

// productSchema.methods.joiValidate=function(obj){
const schema = new Joi.object().keys({
  name: Joi.string().min(6).max(30).required(),
  price: Joi.number().min(0).required(),
  featured: Joi.boolean().required(),
  rating: Joi.number().min(0).max(10).required(),
  createdAt: Joi.date().required(),
  company: Joi.string().required(),
});




 const validatorMiddleware = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    // rest of the code

    const result=Joi.validate(dataToValidate,schema);
    console.log(result);



  } catch (error) {
    if (error.isJoi) {
        // Handle error
    }
  }
};

module.exports=validatorMiddleware