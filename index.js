const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app')


//Configuring the required environment into Node JS which is present in config.env file.
dotenv.config({path:'./config.env'});





// Connecting to DB
const connectionString = process.env.DB_CONNSRTING.replace('<password>',process.env.DB_PASSWORD);



mongoose.connect(connectionString).then(()=>{
    console.log("Database Successfully Connected")
}).catch((err)=>{
    var error = {
        status:"Cannot Connect to DB",
        error:err
    }
    console.log(error)
})




// Configuring port number
let port = process.env.NODE_ENV==='production'? process.env.PORT||4000:3000;


app.listen(port,()=>{
    console.log("Connected to the port : ",port)
})