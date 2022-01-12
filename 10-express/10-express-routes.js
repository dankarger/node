const express = require('express')
const app = express()


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

app.listen(3000,()=>{
    console.log('port on 3000')
})