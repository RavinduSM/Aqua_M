import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';
import { isAuth, isFarmer } from '../utils.js';

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async (req,res) => {
    const name = req.query.name || '';
    const nameFilter = name? {name: {$regex: name, $options: 'i'}} : {};
    const farmer = req.query.farmer || '';
    const farmerFilter = farmer ? { farmer } : {};
    const products = await Product.find({...farmerFilter, ...nameFilter}).populate('farmer', 'farmer.name');    
    res.send(products);
    })
);

productRouter.get('/:id', expressAsyncHandler(async (req,res) => {
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product);
    } else {
        res.status(404).send({message: 'Product Not Found'});
    }
    })
);

productRouter.get('/myProducts',
    isAuth,
    expressAsyncHandler(async (req,res) => {
        const productss = await Product.find({user: req.user._id});
        res.send(productss); 
    })
)

productRouter.post('/', isAuth, isFarmer,
expressAsyncHandler(async(req,res) =>{
    const product = new Product({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        countInStock: req.body.countInStock,
        size: req.body.size,
        des: req.body.des,
        image: req.body.image,  
        farmer: req.user._id,      
    })
    const creatProduct = await product.save();
    res.send({ message:"product created", product: creatProduct});
}) )

// productRouter.post('/addProduct', isAuth, isFarmer,
// expressAsyncHandler(async(req,res) =>{
//     const product = new Product({
//         name:"Zebra green",
//         category: "nfjnf",
//         price: 566,
//         countInStock: 5000,
//         farmer: req.user._id,    
//         size: 5,
//         des:"description",
//         image: "images/v1.jpg",            
//     })
//     const createProduct = await product.save();
//     res.send({ message:"product created", product: createProduct});
// }) )

productRouter.put('/:id', isAuth, isFarmer,
expressAsyncHandler(async(req, res) =>{
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product){
        product.name = req.body.name;
        product.category = req.body.category;
        product.price = req.body.price;
        product.countInStock = req.body.countInStock;
        product.size = req.body.size;
        product.des = req.body.des;
        product.image = req.body.image;
        const updateProduct = await product.save();
        res.send({ message: 'Product Updated', product: updateProduct });
    } else {
        res.status(404)
        .send({message: "product not found"});
    }
}))

productRouter.delete('/:id', isAuth, isFarmer,
expressAsyncHandler(async(req,res)=> {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
        const dltProduct = await product.remove();
        res.send({ message: 'Product Deleted', product: dltProduct});
    } else {
        res
        .status(404)
        .send({message: "Product Not Found"});
    }
}))

export default productRouter;