const Product = require('../models/product.model.js')


const createProduct = (req,res) => {
	console.log(req.body)
	Product.create(req.body)
	.then(confirmations => res.json(confirmations))
	.catch(err => res.status(400).json(err))
}

const getProducts = (req,res) => {
	Product.find({})
	.then(confirmations => res.json(confirmations))
	.catch(err => res.status(400).json(err))
}

const getOne = (req,res) =>{
	const {id} = req.params
	Product.findOne({_id:id}).
	then(prod=>res.json(prod))
	.catch(err=>res.status(400).json(err))
}

const updateOne = (req,res) =>{
	const {id} = req.params
	Product.updateOne({_id:id},
		{$set:{
			title:req.body.title,
			price:req.body.price,
			description:req.body.description,

		}},{new:true}).
	then(prod=>{
		res.json(prod)
		console.log(prod)
	})
	.catch(err=>res.status(400).json(err))
}

const deleteOne = (req,res) =>{
	const {id} = req.params
	console.log(id)
	Product.deleteOne({_id:id})
	.then(prod=>res.json(prod))
	.catch(err=>res.status(400).json(err))
}

module.exports = {
	createProduct,
	getProducts,
	getOne,
	updateOne,
	deleteOne
}