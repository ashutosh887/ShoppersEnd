const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type:String, 
        required:[true, "Please enter product name"],
        trim:true
    },
    description: {
        type:String,
        required: [true, "Please enter product description"]
    },
    price: {
        type:Number,
        required:[true, "Please enter product price"],
        maxLength: [8, "Price cannot exceed 8 figures"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please enter Product Category"]
    },
    Stock:{
        type:Number,
        required:[true,"Please enter product Stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product", productSchema);