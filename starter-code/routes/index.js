//this handles the standard things about the site.

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Check if user is valid to go to welcome or not (if logged in).
router.use((req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {

    res.redirect('/login');
  }
});

router.get("/logout", (req, res, next) => {
  res.render("logout");
});

router.get("/home", (req, res, next) => {
  res.render("home");
});





module.exports = router;
