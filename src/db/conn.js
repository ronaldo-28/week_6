const mongoose = require ('mongoose');

const connectionString = "mongodb://localhost:27017/foodApi";

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB database"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

module.exports = mongoose;
