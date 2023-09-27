import express from "express";
import expressAsyncHandler from "express-async-handler";
import Tank from "../models/tankModel.js";
import { isAuth, isFarmer } from '../utils.js';

const tankRouter = express.Router();

tankRouter.post('/add', isAuth,
    expressAsyncHandler(async (req,res) =>{
        const tank = new Tank({
            length1: req.body.length1,
            length2: req.body.length2,
            fishName: req.body.fishName,
            fishLength: req.body.fishLength,
            fishCal: req.body.fishCal,
            farmer: req.user._id,
        });
        const createTank = await tank.save();
        res
        .send({
            message: 'Tank added', tank: createTank           
        });
    })    
);

export default tankRouter;