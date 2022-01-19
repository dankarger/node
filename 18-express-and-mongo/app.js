const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require("mongoose");
const app =express();
const URL= process.env.URL_MONGO;
const {getProducts,
    getProduct,
    addProduct,
    deleteAllProducts,
    deleteProduct,
    getActiveProducts,
    editProduct } = require('./controller/products.js');
const router = new express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/',router);


mongoose.connect(URL,()=>{
    console.log('connected');

})

router.get('/products', async (req,res)=>{
    try  {
        const products = await getProducts();
        res.status(200).send(products);
    } catch (e) {
        res.status(400).send({ error: e.message })
    }
})

router.post('/products/add',async (req, res) => {
    console.log(req.body)
    try{

         const newProduct = await addProduct(req,res)
        console.log(newProduct)
        res.status(201).send(newProduct)
    }catch(e){
        res.status(400).send({ error: e.message })
    }
})

router.get('/products/active',async (req, res) => {
    try{
        const products = await getActiveProducts();
        console.log('active,',products)
        res.status(201).send(products)
    }catch(e){
        res.status(400).send({ error: e.message })
    }
})

router.put('/product/edit', async (req,res)=>{
    try {
        const editedProduct = editProduct(req.body.id,req.body.discount)
        res.status(200).send(editedProduct)
    } catch(e) {
        res.status(400).send({ error: e.message })
    }
})





router.get('/product/:id', async (req,res)=>{
    try  {
        const id = req.params.id
        const product = await getProduct(id);
        console.log(id)
        res.status(200).send(product);
    } catch (e) {
        res.status(400).send({ error: e.message })
    }
})

router.delete('/product/delete/:id',async (req,res)=> {
    try {
        console.log("1")
        const deletedConfirmation = await deleteProduct(req.params.id)
        if(deletedConfirmation.deletedCount>0)  res.status(200).send(`deleted ${req.params.id} `)
        if(deletedConfirmation.deletedCount===0)  res.status(200).send(`no product was deleted, check if correct id `)


    } catch(e) {
        res.status(400).send({error: e.message})
    }
});

router.delete('/products/delete-all/',async (req,res)=> {
    try {
        const functionResponse = deleteAllProducts();
        res.status(200).send(functionResponse);
    } catch(e) {
        res.status(400).send({error: e.message})
    }
});







const PORT = 3000

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
});