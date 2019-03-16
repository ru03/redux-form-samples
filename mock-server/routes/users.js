var express = require('express');
var router = express.Router();

/* POST users listing. */
router.post('/', function (req, res, next) {
  const userReq = req.body;
  const users = require('./../mocks/users.json');
  console.log(userReq)
  let findUser = users.users.find(user => user.username === userReq.user.username);
  if (!findUser) {
    findUser = { username: 'username not found it', _error: 'Login error' };
    res.status(403).json(findUser);
  } else {
    if(findUser.password !== userReq.user.password) {
      res.status(403).json({ password: 'Password is not correct', _error: 'Login error' });
    } else {
      res.status(200).json(findUser);
    }
  }
});

module.exports = router;
