const mongoose = require('mongoose');
// Connect to your MongoDB database using mongoose
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });