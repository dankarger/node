const express = require('express')
const app = express();
const port = 3000;
// const router = express.Router()

app.use(express.json());


app.get('/numbers/', function (req, res) {
    res.send('success using get')
})

app.post('/numbers/', function (req, res) {
    res.send('success using post')
})

app.put('/numbers/', function (req, res) {
    res.send('success using put')
})

app.delete('/numbers/', function (req, res) {
    res.send('success using delete')
})




app.get("*", (req, res) =>
    res
        .status(404)
        .json({ message: "Route does not exist", app: "Express-Routes" })
);

app.listen({port},()=>{
    console.log(`port on ${port}`)
})