import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js'

const orderRouter = express.Router();

orderRouter.post(
    '/',
    expressAsyncHandler(async (req,res) =>{
        const order = new Order({
            seller: req.body.user,
            itemName: req.body.itemName,
            qty: req.body.qty,
            price: req.body.price,
            totPrice: req.body.totPrice,
            address: req.body.address,
            tele: req.body.tele,
            user: req.user.id
        });
        const createOrder = await order.save();
        res. status(201)
        .send({ message: 'New order has been placed', order: createOrder});
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