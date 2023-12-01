const express = require('express')
const joiMiddleware= require('../middleware/joi-validator')
const router = express.Router()

const {
  getAllProducts,
  getAllProductsStatic,
  createProducts
} = require('../controllers/products')

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStatic)
router.route('/validation').post(joiMiddleware,createProducts)
module.exports = router
