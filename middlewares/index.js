function checkIfAdmin(req, res, next){
  if(req.session.user.is_admin){
      return next();
  }
  else{
    //  console.log("you must be logged in as admin...")

    return res.redirect("/login");
  }
}

module.exports.checkIfAdmin = checkIfAdmin;
