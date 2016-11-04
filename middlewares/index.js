function checkIfAdmin(req, res, next){
  if(req.session.user.is_admin){
      return next();
  }
  else{
    //  console.log("you must be logged in as admin...")
    req.flash("warning", "You must be logged in as admin to access this page")
    return res.redirect("/login");
  }
}

module.exports.checkIfAdmin = checkIfAdmin;
