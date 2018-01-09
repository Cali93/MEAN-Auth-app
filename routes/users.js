const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// Register
router.post('/register', (req, res, next) =>{

  let newUser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })

  User.addUser(newUser, (err, user) => {
    if (err){
      res.json({success: false, msg:'Failed to register user'})
    } else {
      res.json({success: true, msg:'User registered'})
    }
  })
});

// Auth
router.post('/authenticate', (req, res, next) =>{
  res.send('Authenticate')
})

// Profile
router.get('/profile', (req, res, next) =>{
  res.send('Profile')
})

// // Validate
// router.get('/Validate', (req, res, next) =>{
//   res.send('Validation')
// })

module.exports = router;
