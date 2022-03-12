const Item = require('../modules/Items');
const User = require('../modules/User');
const Session = require('../modules/Session');
const session = require('express-session');
const { check } = require('express-validator');
const {checkUserOK,
  sessionTemplate, assignUser,
  updateUser, checkAmount,
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

module.exports.checkout = async(req, res, next) => {
  const user = req.body.userid;
  const items = req.body.items;
  const msg = {
    message: "invalid, couldn't proccessed"
  }

  const validAmount = await checkAmount(items);
  if(!validAmount){
    res.status(400).json(msg);
    return;
  }
  
  await updateUser(user, items);
  res.status(200).json({message: "purchased successfully"});
}