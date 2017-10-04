const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');



// set the app

const app = express();

mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

app.use( '/api', require('./routes/api') );

//handling errors

app.use(function(err,req,res,next){

	res.status(422).send({error : err.message});
});



//listen to the port

app.listen(4000 , function(){
   console.log('server is running.....');
});