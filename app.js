const express = require('express');
const app = express();
const contentRouter = require('./routes/contentRouter')
const sevRouter = require('./routes/sevRouter')
const cors = require('cors')



app.use(cors({
    origin: ['https://main--bejewelled-longma-891e99.netlify.app', 'http://localhost:3000'],
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.options('*',cors());

// app.options('*',cors({
//     origin: ['https://main--bejewelled-longma-891e99.netlify.app', 'http://localhost:3000']
// })); 


app.use("/api/v1/fops/contents",contentRouter)

app.use("/api/v1/fops/sevs",sevRouter)



// 404 Error
app.all("*",(req,res)=>{
    res.status(404).send({
        status : "404 Error",
        message:"Url not present"
    })
})



module.exports = app;