const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })
const { MongoClient, ObjectId } = require("mongodb");


const mongoose = require('mongoose');
// const {MongoClient} = require("mongodb");


const URL= process.env.URL_MONGO
const client = new MongoClient(URL);
const connectToMongo = async () => {
    try {
        await mongoose.connect(URL)

        const User = mongoose.model('users', {
            name: {type: String},
            age: {
                type: Number
            }
        })
        const me = new User({name: "d32d", age: 12})
        me.save().then(()=>{
            console.log(me)
        }).catch((e)=>{
            console.log('Error',e)
        })
    }

    catch (e) {
        console.log(e)
    }
    // finally {
    //   await  mongoose.connection.close()
    // }
}

const connection = connectToMongo()
