const Item = require('../modules/Items');
const User = require('../modules/User');
const Session = require('../modules/Session');
const session = require('express-session');
const { check } = require('express-validator');
const {updateUser, checkAmount,
  hashPassword,
} = require('../scripts/assist-functions');

const ERRORS = {
    logged: "logged in",
    invalidEmail: "not a valid email",
    wrongPassword: "wrong password",
    invalidInput: "invalid input",
};

module.exports.mainGet = async (req, res, next) => {
  const data = await Item.find({});
  res.json(data);
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


module.exports.signupUser = (req, res) => {
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
