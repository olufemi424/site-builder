const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// User Model
const User = require('../../models/user');

// POST User Login
router.post('/login', (req, res) => {
  User.authenticate(req.body.email, req.body.password)
    .then(
      user => {
        req.session.userId = user._id;
        return res.status(200).json(user);
      },
      err => {
        return res.status(400).json(err);
      }
    )
    .catch(err => {
      return res.status(500).json(err);
    });
});

router.get('/logout', (req, res) => {
  if (req.session.userId) {
    req.session.destroy(err => {
      err ? res.status(500).json(err) : res.status(200)
    })
  }
  res.end()
})

module.exports = router;
