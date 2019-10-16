var express = require("express");
var router = express.Router();
var db = require("../models");
var bcrypt = require("bcrypt");

//get route for logged in users homepage, if logged in will let you in, otherwise will fail
router.get('TODO:/secret',function(req,res){
    if(req.session.user) {
        res.render('securepage',req.session.user);
    }else {
        res.send('Please login.')
    }nod
})

//loads signup form
router.get("/signup", function(req, res) {
  res.render("signup");
});

//creates new instance of user
router.post("/signup", function(req, res) {
  console.log(req.body);
  db.User.create({
    name: req.body.name,
    password: req.body.password,
    district: req.body.district
  }).then(function(newUser) {
    console.log(newUser);
    res.json(newUser);
  });
});

//loads login form
router.get("/login", function(req, res) {
  res.render("login");
});

//route for user login
router.post("/login", function(req, res) {
  db.User.findOne({
    where: {
      name: req.body.name
    }
  }).then(function(dbUser) {
    //compares password send in req.body to one in database, will return true if matched.
    if (bcrypt.compareSync(req.body.password, dbUser.password)) {
      //create new session property "user", set equal to logged in user
      req.session.user = dbUser;
    } else {
      //delete existing user, add error
      req.session.user = false;
      req.session.error = "auth failed";
    }
    res.json(req.session);
  });
});

router.get("/logout", function(req, res) {
  //delete session user, logging you out
  req.session.destroy(function() {
    res.send("successfully logged out");
  });
});

//developer route to see all the session variables.
router.get("/readsessions", function(req, res) {
  res.json(req.session);
});

router.get("/elections", function(req, res) {
  res.render("elections");
});

module.exports = router;
