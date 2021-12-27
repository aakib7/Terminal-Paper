var express = require('express');
var router = express.Router();
var { Task } = require("../models/Tasks");
let { User } = require('../models/User');
var bcrypt = require('bcryptjs');
const _ = require('lodash');
const config = require('config');
const { route } = require('../app');
const isAuth = require('../middleware/isAuth');


/* GET Tasks. */
router.get('/tasks:id', async function(req, res, next) {
  try {
    let task = await Task.findById(req.params.id);
    if(!task) {
      return res.status(400).res.send("task with given id not present");
    }
    return res.send(task);
  } catch (err) {
    return res.status(400).send("Invalid ID");
  }
});

router.get("/tasks",async function(req, res, next) {
  let task = await Task.find();
  return res.send(task);
  
});
//Add New Tasks
router.post("/tasks",async function(req, res, next) {
  let task = new Task(req.body);
    await task.save();
    res.send(task); 
});
router.get("/tasks/month",async function(req, res, next) {
  let task = await Task.find({});
    res.send(task); 
});

// home page
router.get("/",async (req, res)=>{
  res.render("login");
});
router.get("/register",async (req, res)=>{
  res.render("register");
});

// Register New Users
router.post('/register', async(req,res) => {
   let user = await User.findOne({ email:req.body.email });
   if(user){
     return res.status(400).send("User Already exist");
   }
   else{
    let user = new User();
    user.user_name = req.body.user_name;
    user.email = req.body.email;
    user.password = req.body.password;

    let salt = await bcrypt.genSalt(10); // password encryption with bcryptjs
    user.password = await bcrypt.hash(user.password, salt);

    await user.save()
    res.redirect('/login');
   }   
});

// Login Exsisting User
router.get("/login",async (req, res)=>{
  res.render("login");
});

router.post('/login',async(req,res)=>{
    let user = await User.findOne({email:req.body.email});
    if(!user){
      return res.status(400).send("User Not registerd");
    }
    else{
      let valid = await bcrypt.compare(req.body.password,user.password);
      if(!valid){
        return res.status(401).send("Incorect Password");
      }
      else{
        req.session.user = user;
        res.redirect("/profile");
      }
    }
   });

  // profile Page
  router.get('/profile', isAuth ,async(req, res)=>{
    res.render('profile',{email:req.session.user.email});
  })


// logOut
router.post('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err) {
            throw err;}
        else{
            res.redirect('/');
        }
    });

});

module.exports = router;
