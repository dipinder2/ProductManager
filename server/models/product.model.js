const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		minLength:3
		},
	price: {
		type: Number,
		required: true,
		min:1
		},
	description:{
		type: String,
		required: true,
		minLength:3
	}
});

module.exports = mongoose.model("Product",ProductSchema)