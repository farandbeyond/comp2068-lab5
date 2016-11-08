var express = require('express');
var router = express.Router();
var Account = require('../models/account');
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  if(!req.isAuthenticated()){
    res.redirect('/login');
  }
  Account.find(function(err, accounts) {
    if (err) {
      console.log(err);
      res.render('error');
    }
    else {
      // load the games view
      res.render('users', {
        title: 'Users',
        users: accounts,
        user: req.user
      });
    }
  });
});

module.exports = router;
