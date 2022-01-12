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
        res.send('Old number doesnt exist')
    }
    if(Numbers.includes(+newNum)){
        res.send('New number all ready exist')
    }
    Numbers[oldNumIndex] = +newNum
    res.send(Numbers)

})

app.post('/numbers/:newNum', function (req, res) {
    // const {newNum} = (req.query)
    const {newNum} = (req.params)
    if(Numbers.includes(+newNum)) {
        res.send('Number allready exixst')
    }else {
        Numbers.push(+newNum)
        res.send(Numbers)
    }
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