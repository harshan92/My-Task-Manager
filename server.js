var http=require('http');
var express=require('express');
var appRoutes=require('./routes/appRoutes');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var cors=require('cors');



mongoose.connect('mongodb://localhost/meandb');
var app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',appRoutes);

var port=process.env.PORT || 8080;

http.createServer(app).listen(port);

console.log('Server is running..on port'+port);