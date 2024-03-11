const EndUser = require('../models/endUserModel');
const fs = require('fs');

const register_user = async (req, res) => {
    try {
      // Fetch location data based on pin code
      const locationData = await getPinAndCityData(req.body.pin);
      if (!locationData) {
        return res.status(400).send({ success: false, msg: 'Invalid postal code' });
      }
  
      // Check if mobile number already exists
      const userData = await EndUser.findOne({ mobile: req.body.mobile });
      if (userData) {
        return res.status(409).send({ success: false, msg: 'Mobile number already registered' });
      }
  
      // Create new user with all fields from the request
      const newUser = new EndUser({
        image: req.file.filename,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        mobile: req.body.mobile,
        pin: req.body.pin,
        DOB: req.body.DOB,
        gender: req.body.gender,
        profession: req.body.profession,
        wheredidyouhearus: req.body.wheredidyouhearus,
     
      });
  
      const newuser_data = await newUser.save();
      return res.status(201).send({ success: true, data: newuser_data });
    } catch (err) {
      console.error('Error in register_user:', err);
      return res.status(500).send({ success: false, msg: err.message });
    }
  };

  module.exports = {
    register_user
    
  };