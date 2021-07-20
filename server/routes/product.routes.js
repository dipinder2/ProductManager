const ProductController = require('../controllers/product.controller')
const express = require('express')
const router = express.Router()



router.get('/products',
	(req,res)=>{
		ProductController.getProducts(req,res)
	})

router.post('/products/new',
	(req,res)=>{
			ProductController.createProduct(req,res)
	})

router.get('/products/:id',
	(req,res)=>{
			ProductController.getOne(req,res)
	})


module.exports = router