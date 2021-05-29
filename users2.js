const router=require('express').Router();
let User=require('../models2/user2.model');

router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
});
 router.route('/add').post((req,res) => {
    const fullName=req.body.fullName;
    const password=req.body.password;
    
    const newUser= new User({fullName,password,});
    newUser.save()
    
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error:' + err));
});
module.exports=router;