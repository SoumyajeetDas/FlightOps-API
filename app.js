const express = require('express');
const app = express();
const contentRouter = require('./routes/contentRouter')



app.use("/api/v1/fops/contents",contentRouter)



module.exports = app;