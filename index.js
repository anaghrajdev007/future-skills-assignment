const express = require('express');
const app = express();
require("./db/config");
app.use(express.json());

const reguser = require("./models/endUserModel");

const user_routes = require("./routes/userRoutes");
app.use('/api',user_routes);


const PORT =  5000; 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});