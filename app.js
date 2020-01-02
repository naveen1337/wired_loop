const express = require('express');
const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const product = require('./routes/product')

const app = express();
app.use(express.json()); 
const port = 5000;

mongoose.connect('mongodb://localhost/wired_loop', 
	{dbName:'wired_loop',useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;
db.on('error', ()=>console.log("DB Connection Error"));
db.once('open',()=>console.log('Connction DB Done'));

app.use('/product',product)

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