const mongoose = require('mongoose')

const productschema = mongoose.Schema({
	name:{
		type:String,
		required:true,
		// unique: true
	},
	product_id:{
		type:String,
		required:true,
		unique: true
	},
	tags:{
		type:Array,
		required:true,
		// unique: true
	},
	price:{
		type:Number,
		required:true
	},
	quantity:{
		type:Number,
		required:true,
		unique: false
	},
	media:{
		type:Array,
		required:false,
		// unique:true
	},
	info:{
		type:String,
		required:true,
		unique: false
	},

});

module.exports = mongoose.model('productdata', productschema);