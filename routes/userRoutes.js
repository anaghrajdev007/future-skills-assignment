const express = require('express');
const user_route = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');

user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({ extended: true }));

user_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/userImages'));
    },
    filename: function (req, file, cb) {
      const name = Date.now() + '-' + file.originalname;
      cb(null, name);
    }
  });
  
  const upload = multer({ storage: storage });
  
  user_route.post('/enduser', upload.single('image'), user_controller.register_user);

  module.exports = user_route;