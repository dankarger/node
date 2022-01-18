const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const { MongoClient, ObjectId } = require("mongodb");
const validator = require('validator')

const mongoose = require('mongoose');
 // const {MongoClient} = require("mongodb");
const Product =require('./Product')


const URL= process.env.URL_MONGO
const client = new MongoClient(URL);

const connectToMongo = async () => {
    try {
        await mongoose.connect(URL)




        const product1 = {
            name:"Pencil23",
            category:"office",
            isActive:true,
            details:{
                description:"This is a pencil3, like a pen but different",
                price:15,
                discount:0,
                images:[32,'image23'],
                phoneNumber:543454534,
            },


        }
        const product2 = {
            name: "Pen2",
            category: "office",
            isActive: true,
            details: {
                description: "This is a pen, like a pen but different",
                price: 4,
                discount: 0,
                images: [32, 'image23'],
                phoneNumber: 543454534,
            },
        }


        const product= await Product.create(product1)
        const product22= await Product.create(product2)
        console.log(product,product2)
    }

    catch (e) {
        console.log(e)
    }
    // finally {
    //   await  mongoose.connection.close()
    // }
}


const connection = connectToMongo()
