const mongoose = require('mongoose');

const connectDB = async () =>{

    try {
        await mongoose .connect("mongodb://localhost:27017/Bootcamp_Api",{
            useFindAndModify:true,
            useUnifiedTopology:true,
            useNewUrlParser:true, 
            useCreateIndex:true,
            useFindAndModify:false
         }
        )
        console.log('mongodb connected successfully')
        
    } catch (error) {

        console.log(error)
        
    }

}

module.exports =connectDB