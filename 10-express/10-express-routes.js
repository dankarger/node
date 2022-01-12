const express = require('express')
const app = express();
const port = 3000;
const router = express.Router()


app.get('/numbers/', function (req, res) {
    res.send('success using  get')
})

app.post('/numbers/', function (req, res) {
    res.send('success using  post')
})

app.put('/numbers/', function (req, res) {
    res.send('success using  put')
})
app.delete('/numbers/', function (req, res) {
    res.send('success using delete')
})

app.listen({port},()=>{
    console.log(`port on ${port}`)
})