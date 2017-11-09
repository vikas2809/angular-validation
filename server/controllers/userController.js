
//importing the user model from the models

var User =require('../models/user');


var user = {
    name: "Admin User",
    email: "admin@gmail.com",
    password: "admin1234",
    role: "admin"
}

User.create(user, function(e) {
    if (e) {
        throw e;
    }
});



exports.postUserDetails=function(request,response){
console.log("inside the database save method");
    var user=new User({
        firstName:      request.body.firstName,
        lastName:       request.body.lastName,
        password:       request.body.password,
        email:          request.body.email,
        role:           request.body.role,
        address:        request.body.address,
        city:           request.body.city,
        state:          request.body.state,
        pincode:        request.body.pincode,
        designation:    request.body.designation,
        phone_number:   request.body.phone_number,
        created_at:     new Date(),
        updated_at:     request.body.updated_at
    });

    //creating the user document in the collections
    user.save((error,res)=>{
        if(error)
        return error;
        else
        {
            response.json({
                success:true,
                body:res
            })
        }
    })
}

//requesting for all the user details
exports.getAllUser=function(req,res){
    User.find( {},(error,response)=>{
        if(error)
            res.json(error);
        // res.json(response);
        res.json({
            "status": true,
            "respData": {
                "data": response
            }
        }
        )
    });
}

//requesting for the entered email and password
exports.getUserDetail=function(req,res){
    var user_email=req.params.entered_email;
    User.find({"email":user_email},(error,response)=>{
        if(error)
            res.json(error);
        res.json(response);
    });
}