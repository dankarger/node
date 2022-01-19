const mongoose = require("mongoose");

const validator = require('validator')
const {SchemaType} = require("mongoose");
// const isMobilePhone = require("validator/es/lib/isMobilePhone");

const detailsSchema= new mongoose.Schema({
    description:{
        type: String,
        require:true,
        minLength:10
    },
    price: {
        type:Number,
        require:true,
        // validate (value){
        //     if(value<0){
        //         throw Error('must be positive')
        //     }
        // },
        min:0
    },
    discount: {
        type: Number,

        require:true,
        min:0,
        default:0},
    images:{
        type:[String],
        require:true,
        minlength:2

    },
    phoneNumber:{
        type:String,
        validate(value){
            if(!validator.isMobilePhone(value, "he-IL")){
                throw new Error('"invalid phone number"')
            }
        },
        // validate: {
        //     validator: (value) => value.validator.isMobilePhone(value, "he-IL"),
        //     message: "invalid phone number",
        // },
        // validate: {
        //     validator: (value) => value.validator.isMobilePhone(value, "he-IL"),
        //     message: "invalid phone number",
        // },
    },
    dateAdded:{
        type:Date,
        default: ()=> Date.now()
    }
})




const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true,
        unique:true
    },
    category: {
        type: String,
        require:true
    },
    isActive: {
        type:Boolean,
    },
    details: detailsSchema,

});

module.exports = mongoose.model("Product", productSchema);