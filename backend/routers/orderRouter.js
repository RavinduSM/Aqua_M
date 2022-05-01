import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js'
import { isExporter, isAuth, isUser, isFarmer } from '../utils.js';

const orderRouter = express.Router();

orderRouter.post(
    '/', isAuth,
    expressAsyncHandler(async (req,res) =>{
        const order = new Order({
            farmer: req.body.farmer,
            itemName: req.body.itemName,
            qty: req.body.qty,
            unitPrice: req.body.unitPrice,
            //totPrice: req.body.totPrice,            
            user: req.user._id,
            // orderDate: req.body.orderDate,
            // requestDate: req.body.requestDate
        });
        const createOrder = await order.save();
        res. status(201)
        .send({ message: 'New order has been placed', order: createOrder});
    })
)

orderRouter.get(
    '/', isAuth, isFarmer,
    expressAsyncHandler(async(req,res) =>{
        const farmer = req.query.farmer || '';
        const farmerFilter = farmer ? {farmer} : {};
        
        const order = await Order.find({...farmerFilter}).populate('farmer', 'itemName');
        if(order) {
            res.send(order);
        }else{
            res
            .status(404)
            .send({message: 'Order Not Found'});
        }
    })
)

orderRouter.get(
    '/exporterOrders', isAuth, isExporter,
    expressAsyncHandler(async(req,res) =>{
        const exporter = req.query.exporter || '';
        const exporterFilter = exporter ? {exporter} : {};
        
        const order = await Order.find({...exporterFilter}).populate('exporter', 'itemName');
        if(order) {
            res.send(order);
        }else{
            res
            .status(404)
            .send({message: 'Order Not Found'});
        }
    })
)

orderRouter.get(
    '/:id',
    expressAsyncHandler(async(req,res) =>{
        const order = await Order.findById(req.params.id);
        if(order) {
            res.send(order);
        }else{
            res
            .status(404)
            .send({message: 'Order Not Found'});
        }
    })
)

export default orderRouter;