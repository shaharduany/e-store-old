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
    checkAmount, updateUser,
    hashPassword,

  }