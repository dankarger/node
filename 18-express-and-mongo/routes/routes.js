const express = require('express');

const productRouter = express.Router();
const {getProducts,
    getProduct,
    addProduct,
    deleteAllProducts,
    deleteProduct,
    getActiveProducts,
    editProduct,
    changeActiveProduct} = require('../controller/products.js');




productRouter.get('/products', async (req,res)=> {
    try {
        const products = await getProducts();
        res.status(200).send(products);
    } catch (e) {
        res.status(400).send({error: e.message})
    }
}).post('/products/',async (req, res) => {
    console.log(req.body)
    try{

        const newProduct = await addProduct(req,res)
        console.log(newProduct)
        res.status(201).send(newProduct)
    }catch(e){
        res.status(400).send({ error: e.message })
    }
})

productRouter.get('/products/active',async (req, res) => {
    try{
        const products = await getActiveProducts();
        console.log('active,',products)
        res.status(201).send(products)
    }catch(e){
        res.status(400).send({ error: e.message })
    }
})

productRouter.put('/product/edit', async (req,res)=>{
    try {
        const editedProduct = editProduct(req.body.id,req.body.discount)
        res.status(200).send(editedProduct)
    } catch(e) {
        res.status(400).send({ error: e.message })
    }
})

productRouter.put('/product/active', async (req,res)=>{
    try {
        const editedProduct = changeActiveProduct(req.body.id,req.body.isActive)
        res.status(200).send(editedProduct)
    } catch(e) {
        res.status(400).send({ error: e.message })
    }
})



productRouter.get('/product/:id', async (req,res)=>{
    try  {
        const id = req.params.id
        const product = await getProduct(id);
        console.log(id)
        res.status(200).send(product);
    } catch (e) {
        res.status(400).send({ error: e.message })
    }
}).delete('/product/:id',async (req,res)=> {
    try {
        console.log("1")
        const deletedConfirmation = await deleteProduct(req.params.id)
        if(deletedConfirmation.deletedCount>0)  res.status(200).send(`deleted ${req.params.id} `)
        if(deletedConfirmation.deletedCount===0)  res.status(200).send(`no product was deleted, check if correct id `)


    } catch(e) {
        res.status(400).send({error: e.message})
    }
});

productRouter.delete('/products/delete-all/',async (req,res)=> {
    try {
        const functionResponse = deleteAllProducts();
        res.status(200).send(functionResponse);
    } catch(e) {
        res.status(400).send({error: e.message})
    }
});






module.exports = productRouter