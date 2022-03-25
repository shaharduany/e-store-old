const Item = require('../modules/Items');
const User = require('../modules/User');
const Session = require('../modules/Session');
const session = require('express-session');
const { check } = require('express-validator');
const {updateUser, checkAmount,
  hashPassword,
} = require('../scripts/assist-functions');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth-config');

const ERRORS = {
    logged: "logged in",
    invalidEmail: "not a valid email",
    wrongPassword: "wrong password",
    invalidInput: "invalid input",
};

module.exports.checkEmailExists = async(req, res, next) =>{
  const email = req.body.email;

  let value = false;

  const lookUp = await User.findOne({email: email}).exec((err, user) => {
    if(err){
      console.log(err);
      res.status(400).json({msg: "Something went wrong"});
      return;
    }

    if(user){
      value = true;
      res.status(200).json({valid: value});
    }
  });
}

module.exports.mainGet = async (req, res, next) => {
  const data = await Item.find({});
  res.json(data);
}

module.exports.checkout = async(req, res, next) => {
  const user = req.body.user;
  const cart = req.body.items;
  const info = req.body.info;
  const date = req.body.date;

  const deal = {
    date: date, 
    info: info,
    items: cart,
  };

  console.log(`in checkout. user > ${user} items: ${cart}`);

  const msg = {
    message: "invalid, couldn't proccessed"
  }

  const validAmount = await checkAmount(cart);
  if(!validAmount){
    res.status(400).json(msg);
    return;
  }
  

  await updateUser(user, deal);
  res.status(200).json({message: "purchased successfully"});
}


module.exports.signupUser = (req, res) => {
  let email = req.body.email;
  let password = hashPassword(req);
  let username = req.body.username;
  
  console.log(`email > ${email} \t password > ${password}`);

  let user = new User({
    email: email,
    password: password,
    username: username,
  });

  user.save((err, user) => {
    if(err){
      res.status(400).send({message: err});
      console.log(err);
      return;
    }

    let msg = {message: "message"};
    console.log("created user");
    res.status(200).send(msg);
  }); 
}

module.exports.signin = async(req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  
  let user = User.findOne({email: email}).exec((err, user) => {
    if(err){
      res.status(404).send({message: err});
      return;
    }
    if(!user){
      console.log('user not found');
      res.status(404).send({message: "User not found"});
      return;
    }

    let validPassword = bcrypt.compareSync(
      password,
      user.password
    );

    if(!validPassword){
      console.log('invalid password');
      return res.status(404).send({
        accessToken: null,
        message: "Wrong or invalid password"
      });
    }
    
    let token = jwt.sign({id: user._id}, authConfig.secret, {
      expiresIn: authConfig.oneDay
    });
    
    let vals = {
      message: "Successfully logged in",
      id: user._id,
      username: user.username,
      email: user.email,
      cart: user.cart,
      history: user.history,
      accessToken: token
    };
  
    res.status(200).json(vals);
    console.log(`vals > ${vals.email}`);

  });
}
