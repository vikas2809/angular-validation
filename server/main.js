
var express=require('express');
var mongoose=require('mongoose');
var body_parser=require('body-parser');

//connecting to the mongodb database
mongoose.connect('mongodb://localhost:27017/AngularDemo');

//creating the express application
var main=module.exports=express();

main.set('env',process.env.NODE_ENV || 'production');

main.use(body_parser.urlencoded({ extended : true}));

main.use(body_parser.json());

routes=require('./routes/routes');
main.use('/api',routes);

//setting the port on which the server responds
var port = process.env.PORT || 4000;


//starting the server
main.listen(port);
console.log('Server starts on port ' + port);