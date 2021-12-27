var alert = require('alert');
function isAuth(req,res,next){
    if (req.session.user) {
    next();
  } else {
    req.session.error = "You have to Login first";
    alert("You have to Login first");
  }
}

module.exports = isAuth;