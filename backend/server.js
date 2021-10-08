const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// Config
dotenv.config({path:"backend/config/config.env"});


// Connecting DATABASE
connectDatabase();

// Server Started
app.listen(process.env.PORT, ()=>{
    console.log(`Server is runnning on : http://localhost:${process.env.PORT}`);
})