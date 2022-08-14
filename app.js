const express = require('express');
const app = express();
const contentRouter = require('./routes/contentRouter')
const cors = require('cors')



app.use(cors());
app.use("/api/v1/fops/contents",contentRouter)


app.use("*",(req,res)=>{
    res.status(404).send({
        status : "404 Error",
        message:"Url not present"
    })
})



module.exports = app;