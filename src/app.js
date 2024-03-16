const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Food = require('./models/food.model');
const mongoose = require('./db/conn');

const app = express();

app.use(cors());
app.use(bodyParser.json());


// app.get("/check", function(req, res){
//   res.send("Complete Checking");
// })

//Save food data (POST request)
app.post('/food', async (req, res) => {
  try {
    const newFood = new Food(req.body);
    await newFood.save();
    res.json({ message: "Food saved successfully!", food: newFood });
  } catch (err) {
    res.status(500).json({ message: "Error saving food data", error: err });
  }
});

// Get all food data (GET request)
app.get('/food', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: "Error fetching food data", error: err });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port number ${port}`));
