const express = require('express')
const app = express();
const port = 3000;
// const router = express.Router()

let Numbers = [1,2,3,4,5,6]
app.use(express.json());


app.get('/numbers/', function (req, res) {
    res.json({message:'success using get',
                    numbers:Numbers
                    })
})

app.put('/numbers/', function (req, res) {
    const {oldNum,newNum} = req.query
    const oldNumIndex = Numbers.indexOf(+oldNum)
    if(oldNumIndex===-1){
        res.status(400).send(`${newNum} dont exist`)
    }
    if(Numbers.includes(+newNum)){
        res.status(400).send(`${newNum} all ready exist`)
    }
    Numbers[oldNumIndex] = +newNum
    res.send(Numbers)

})

app.post('/numbers/:newNum', function (req, res) {
    // const {newNum} = (req.query)
    const {newNum} = (req.params)
    if(Numbers.includes(+newNum)) {
        res.status(400).send(`${newNum} allready exist`)
    }else {
        Numbers.push(+newNum)
        res.send(Numbers)
    }
})


app.delete('/numbers/:num', function (req, res) {
    const {num} = req.params
    console.log(+num)
    console.log(Numbers.includes(+num))
    if(Numbers.includes(+num)===true){
        const numIndex= Numbers.indexOf(+num)
        Numbers.splice(numIndex,1)
        res.send(Numbers).sendStatus(200)
    }else {
        res.status(400).send(`${num} doesnt exist`)
        // res.sendStatus(400).res.send(`${num} doesnt exist`)
    }

})




app.get("*", (req, res) =>
    res
        .status(404)
        .json({ message: "Route does not exist", app: "Express-Routes" })
);

app.listen({port},()=>{
    console.log(`port on ${port}`)
})