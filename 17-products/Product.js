const mongoose = require("mongoose")
const validator = require('validator')
const {SchemaType} = require("mongoose");

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
        // validate(value) {
        //     if(value.length) {
        //         message: props=> `${
        //             this.props.value}'need to be length of  2`)
        //     }
        // }
    },
    phoneNumber:{
        type:Number,
        validate:{
            validator: v=>v.isMobilePhone,
            message: props => `${props.value} is nota phone number`
        }
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