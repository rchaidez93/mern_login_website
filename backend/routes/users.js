const router = require('express').Router();
let User = require('../models/user.model');

// router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   const newUser = new User({username, password});

//   newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// TODO: jwt in response
router.route('/authenticate').post((req, res) => {
  const user_name = req.body.username;
  const password = req.body.password;

  // find better solution 
  let isAuthenticated = false;
  User.findOne({username: user_name}, function(err, user) {
    if(err) throw err;

    user.comparePassword(password, function(err, isMatch) {
      if(err) throw err;

      if(password, isMatch){
        isAuthenticated = true;
        res.json({authenticated: isAuthenticated});
      }
      else{
        isAuthenticated =  false;
        res.json({authenticated: isAuthenticated});
      }
    });
  });
  
});

module.exports = router;