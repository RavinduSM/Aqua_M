import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique:true},
        category: {type: String, required:true},
        price: {type: String, required:true},
        countInStock: {type: Number, required:true},              
       // seller: {type: String, required:true},
        size: {type: String, required:true},
        des: {type: String, required: false},
        image: {type: String, required:true},           
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);

export default Product;