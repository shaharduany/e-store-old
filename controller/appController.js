const Item = require('../modules/Items');
const User = require('../modules/User');
const Session = require('../modules/Session');
const session = require('express-session');
const { check } = require('express-validator');
const {checkResult, userFromSession, checkUserOK,
  sessionExists, sessionTemplate, assignUser,
  updateSession,
} = require('../scripts/assist-functions');

const ERRORS = {
    logged: "logged in",
    invalidEmail: "not a valid email",
    wrongPassword: "wrong password",
    invalidInput: "invalid input",
};

module.exports.mainGet = async (req, res, next) => {
    const id = req.session.id;
    try {
        let data = await Item.find({});
        res.json(data);
        let session = Session.findOne({id: id});
        if(!session){
          const newSession = new Session(sessionTemplate(id));
          newSession.save();
        } else {
          let usr = User.findOne({_id: session.userID});
          if(checkUserOK(usr)){
            //find a way to store user in cookies
            assignUser(req, usr);
          }
        }
      } catch (e) {
        console.log(e);
    }
}

module.exports.loginPost = async(req, res, next) => {
  if(sessionExists(req, res)){
    res.redirect('/api/homepage');
    return;
  }

  const { email, password } = req.body;

  let result = User.findOne({email: email}); 
  if(checkResult(email, password, result)){
    //update cookies and session both at server and database, send whatever is required
    updateSession(req, result);
    res.redirect('/api/homepage');
  } else {
    res.json({error: ERRORS.invalidInput});
  }
};

module.exports.registerPost = async (req, res, next) => {
  console.log('got req1');
  const {email, password} = req.body;
  console.log('got req');
  console.log(body);
  
  /*
  let result = User.find({email: email});
  if(result !== [] || !check(email).isEmail()){
    res.status(401).json({error: ERRORS.invalidInput});
  } else {
    let hash = password; //hash the password here
    const user = new User({email: email, password: hash});
    user.save();
    updateSession(req, user);
    res.redirect(`/api/homepage`);
  }*/
}

module.exports.cartGet = async (req, res, next) => {
  const user = userFromSession(req);
  if(checkUserOK(user)){
    res.json(user.cart);
  } else {
    res.redirect('/api/login');
  }
}

module.exports.accountGet = async (req, res, next) => {
  let user = userFromSession(req);
  if(checkUserOK(user)){
    user.password = "";
    res.json(user);
  } else {
    res.redirect('/api/login');
  }
}
