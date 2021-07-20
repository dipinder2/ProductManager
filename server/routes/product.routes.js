const funcs = require('../controllers/product.controller')
const express = require('express')
const router = express.Router()



router.get('/products',
	(req,res)=>{
		funcs.getProducts(req,res)
	})

router.post('/products/new',
	(req,res)=>{
			funcs.createProduct(req,res)
	})

router.get('/products/:id',
	(req,res)=>{
			funcs.getOne(req,res)
	})

router.put('/products/:id',
	(req,res)=>{
			console.log("comes")
			funcs.updateOne(req,res);
	})

router.delete('/products/:id',
	(req,res)=>{
			console.log("comes")
			funcs.deleteOne(req,res);
			
	})
module.exports = router