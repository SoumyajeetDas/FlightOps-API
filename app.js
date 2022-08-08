const express = require('express');
const app = express();
const contentRouter = require('./routes/contentRouter')
const cors = require('cors')



app.use(cors());
app.use("/api/v1/fops/contents",contentRouter)



module.exports = app;