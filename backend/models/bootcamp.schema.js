const mongoose = require('mongoose');


const bootcampSchema = new mongoose.Schema({

    name : {
        type : String,
        required : [true, 'Please provide a with the bootcamp name'],
        unique : true
    },
    rating : {
        type : Number,
        required : [true, 'Please provide with a bootcamp rating ']
    },

    description : {
        type : String,
        required : [true, 'Please provide with a bootcamp description ']
    },

    price : {
        type : String,
        required : [true, 'Please provide with a bootcamp price' ]
    }
})

const Bootcamp = new mongoose.model("Bootcamp",bootcampSchema )

module.exports = Bootcamp;