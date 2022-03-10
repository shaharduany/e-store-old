const User = require("../../modules/User");

const checkDuplicatedEmail = (req, res, next) => {
    const email = req.body.email;

    User.findOne({
        email: email
    }).exec((err, user) => {
        if(err){
            res.status(500).send({message: err});
            return;
        }
        if(user) {
            res.status(400),send({message: "email already in use"})
            return;
        }
        next();
    });
};
const verifySignUp = {
  checkDuplicatedEmail,
};
module.exports = verifySignUp;