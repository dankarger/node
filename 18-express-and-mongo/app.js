const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require("mongoose");
const productRouter = require('./routes/routes')
const app =express();
const URL= process.env.URL_MONGO;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', productRouter);

mongoose.connect(URL,()=>{
    console.log('connected');
})



const PORT = 3000

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
});