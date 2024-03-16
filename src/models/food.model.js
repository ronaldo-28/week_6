const mongoose = require ('../db/conn');

const FoodSchema = new mongoose.Schema({
            name: String,
            calories: Number, 
            protein: Number,
            carbs: Number,
            fats: Number,
            sugar: Number,
            fiber: Number,
            origin: String,
            cholestrol: String,
            benefits: String
            
});

const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;
