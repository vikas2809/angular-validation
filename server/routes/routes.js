//creating the request and response api

var express=require('express');

var router=express.Router();

var userController=require('../controllers/userController');


router.route('/v1/user/create').post(userController.postUserDetails);


//getting all user from the database
router.route('/v1/user/getAllUser').get(userController.getAllUser);


module.exports=router;