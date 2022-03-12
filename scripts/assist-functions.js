var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const User = require("../modules/User");
const authConfig = require("../config/auth-config");

const checkAmount = async(items) => {
  for(item of items){
    let stock = await Item.findById(item._id);
    let quantity = stock.quantity - item.quantity;

    if(!stock || (quantity < 0)){
      return false;
    } else {
      quan
      await Item.findByIdAndUpdate(item._id, {quantity: quantity});
    }
  }
  return true;
};

const updateUser = async (userId, items) => {
  let user = await User.findById(userId);
  
  for(item of items) {
    await user.history.push(item);
  }

  await User.findByIdAndUpdate(userId, {history: user.history});
}


const hashPassword = (req) => {
  return  bcrypt.hashSync(req.body.password, 8);
}

const signupUser = (req, res) => {
  console.log('in signup user');
  let email = req.body.email;
  let password = hashPassword(req);
  
  console.log(`email > ${email} \t password > ${password}`);

  let user = new User({
    email: email,
    password: password
  });

  user.save((err, user) => {
    if(err){
      res.status(400).send({message: err});
      console.log(err);
      return;
    }
    console.log(user);
  });
}

const signin = async(req, res) => {
  console.log('got request');
  let flag = false;
  let email = req.body.email;
  let password = req.body.password;
  
  console.log(`entered signin\n
  searching for user`);
  let user = User.findOne({email: email}).exec((err, user) => {
    if(err){
      res.status(404).send({message: err});
      return;
    }
    if(!user){
      console.log('user not found');
      flag = true;
      res.status(404).send({message: "User not found"});
      return;
    }
    if(flag){
      console.log('got to flag');
      return;
    }

    console.log('validating password');

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
    
    console.log(`getting token`);
    let token = jwt.sign({id: user._id}, authConfig.secret, {
      expiresIn: authConfig.oneDay
    });
    
    console.log(`sending data from server to client`);
    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      cart: user.cart,
      history: user.history,
      accessToken: token
    });
  });
}

const assignUser = (req, usr) => {
    req.session.isAuth = true;
    req.session.user = usr.email;
  }
  
  const checkResult = (email, password, result) => {
    if(result != false){
      return false;
    } else {
      let hash = password; //hash it later
      if(hash !== result.password){
        return false;
      }
      return true;
    }
  };
  
  const userFromSession = (req) => {
    const session = Session.findOne({id: req.session.id});
    if(session != false || session != undefined){
      return User.findOne({_id: session.userID});
    }
  }
  
  const checkUserOK = (user) => {
    if(user != false && user != undefined){
      return true;
    }
    return false;
  }
  
  const sessionExists = (req, res) => {
    const id = req.session.id;
    try {
      let search = Session.findOne({id: id});
      let usr = User.findOne({_id: search.userID});
      if(usr != false ){  
        assignUser(req, usr);
        res.json({error: ERRORS.logged});
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
    }
  }
  
  const sessionTemplate = (id) => {
    return {
      id: id,
      lastIn: Date.now()
    };
  }

  const updateSession = (req, user) => {
    //update session db with user id
    assignUser(req, user);
  }

  module.exports = {
    assignUser, checkResult, 
    userFromSession, checkUserOK,
    sessionExists, sessionTemplate, 
    updateSession,
    signin, signupUser,
    checkAmount, updateUser,
    

  }