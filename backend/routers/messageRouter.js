import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Message from '../models/messageModel.js';

const messageRouter = express.Router();

messageRouter.post('/', expressAsyncHandler (async(req, res) =>{
    const msgr = new Message({
        name: req.body.name,
        email: req.body.email,
        tele: req.body.tele,
        msg: req.body.msg
    });
    const createMessage = await msgr.save();
    res
    .status(201)
    .send({message: 'Message send', msgr: createMessage});
}))

export default messageRouter;