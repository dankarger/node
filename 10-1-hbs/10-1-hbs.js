const express = require('express')
const app = express();
const hbs = require('hbs')
const port = 3000;
app.set('view engine', 'hbs')
// const router = express.Router()

let Numbers = [1,2,3,4,5,6]
app.use(express.json());


app.get('/',(req,res)=>{
    res.render('demo')
})
//
app.get('/numbers/', function (req, res) {
    // res.json({message:'success using get',
    //     numbers:Numbers
    // })
    res.render('numbersGet',{numbers:Numbers})
})

app.put('/numbers/', function (req, res) {
    const {oldNum,newNum} = req.query
    const oldNumIndex = Numbers.indexOf(+oldNum)
    if(oldNumIndex===-1){
        res.status(400).render('400',{message:`${newNum} dont exist`
    })
    }
    if(Numbers.includes(+newNum)){
        res.status(400).render('400',{message:`${newNum} all ready exist`
    })
    }
    Numbers[oldNumIndex] = +newNum
    // res.send(Numbers)
    res.render('numbersGet',{numbers:Numbers})

})

app.post('/numbers/:newNum', function (req, res) {
    // const {newNum} = (req.query)
    const {newNum} = (req.params)
    if(Numbers.includes(+newNum)) {
        res.status(400).render('400',{message:`${newNum} all ready exist`})
    }else {
        Numbers.push(+newNum)
        res.render('numbersGet',{numbers:Numbers})
    }
})


app.delete('/numbers/:num', function (req, res) {
    const {num} = req.params
    console.log(+num)
    console.log(Numbers.includes(+num))
    if(Numbers.includes(+num)===true){
        const numIndex= Numbers.indexOf(+num)
        Numbers.splice(numIndex,1)
        res.render('numbersGet',{numbers:Numbers})
    }else {
        // res.status(400).send(`${num} doesnt exist`)
        res.status(400).render('400',{message:`${num} doesnt exist`})
    }

})




app.get("*", (req, res) =>
    res
        .status(404)
        . res.status(400).render('400',{message:`Route doesnt exist`})
);

app.listen({port},()=>{
    console.log(`port on ${port}`)
})