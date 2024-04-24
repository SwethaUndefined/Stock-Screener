const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); 
const userRoute = require('./routes/user')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

const cors = require('cors');
const corsOptions = {
  origin: '*', 
  optionsSuccessStatus: 200 
  };
  
  app.use(cors(corsOptions));
  

mongoose
  .connect("mongodb://localhost:27017/stock-screener", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

  app.use('/api/user',userRoute);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
