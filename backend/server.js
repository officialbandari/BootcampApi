require('dotenv').config();
const express = require('express');
const router = require('./routes/bootcampRouter')
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler')



//db connection 
connectDB()

// express connection
const app = express();

//convert object o json
app.use(express.json())

//router
app.use('/api/bootcamp',router)

//Error handling

app.use(errorHandler)




const PORT = process.env.PORT;
app.listen(PORT, ()=>console.log(`Server is running on ${PORT}`));
