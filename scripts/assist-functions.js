var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const User = require("../modules/User");
const authConfig = require("../config/auth-config");
const Items = require("../modules/Items");

const checkAmount = async(items) => {
  console.log('in checkAmount');
  for(let item of items){
    console.log('in for loop check amount');
    let stock = await Items.findById(item.item._id);
    let quantity;

    if(stock instanceof Object){
      quantity = stock.quantity - item.amount;
    }

    if(!stock || (quantity < 0)){
      return false;
    } else {
      await Items.findByIdAndUpdate(item._id, {quantity: quantity});
    }
  }
  return true;
};

const updateUser = async (user, items) => {
  console.log(`in update user`);
  let userInst = await User.findOne({email: user.email});
  
  userInst.history.push(items);
  await userInst.save();
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