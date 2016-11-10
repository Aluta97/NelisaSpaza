function checkIfAdmin(req, res, next){
  if(req.session.user.is_admin){
      return next();
  }
  else{
    req.flash("warning", "Access denied");
    return res.redirect("/");
  }
}

module.exports.checkIfAdmin = checkIfAdmin;
