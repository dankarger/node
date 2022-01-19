const Product = require("../Product.js");
const {ObjectId} = require('mongodb')
const getProducts= async ()=> {
    const data=  await Product.find();
    return data
}

const addProduct = async (req,res)=> {
    const product = await Product.create(req.body)
    return product
}

const getProduct = async (id) => {
    const product = await Product.findById(id)
    return product
}

const getActiveProducts = async () => {
    const products = await Product.where("isActive").equals("true");
    return products
}
const deleteProduct = async (id)=> {
   const product = await Product.deleteOne({_id:id})
    return (product);
}
const deleteAllProducts = async ()=> {
    const product = await Product.deleteMany({})
    return (product);
}

const editProduct = async (id, discount )=> {
    // let product = await Product.findById(id).updateOne({});
    const product = await Product.findByIdAndUpdate({ _id: id }, { $set: { "details.discount": discount }}, { new: true })
    // if(product) {product.details.discount = discount;
    // product.save()}
    return product
}



module.exports = {
    getProducts,
    addProduct,
    getProduct,
    deleteProduct,
    deleteAllProducts,
    getActiveProducts,
    editProduct
}