const express = require('express');
const mongoose = require('mongoose');
const Joi = require('@hapi/joi');


const app = express();

app.use(express.json()); 
const port = 5000;


app.get('/', (req, res)=>{
	res.json({
		"Name":"Wired-loop",
		"status":"Active"
	})
});

console.clear()
app.listen(port,()=>{
	console.log(`App listening on ${port}`)
})