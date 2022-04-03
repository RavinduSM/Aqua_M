import express from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import data from "../data.js";
import bcrypt from "bcryptjs";
import { generateToken, isAuth } from "../utils.js";

const userRouter = express.Router();

userRouter.get('/', expressAsyncHandler(async (req,res) => {
    const users = await User.find({});
    res.send(users);
    })
);

userRouter.post('/signin', expressAsyncHandler(async (req,res) =>{
    const user =await User.findOne({email:req.body.email});  //sending ajax request to find user email is on the db
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                address: req.body.address,
                telephone: req.body.telephone,
                isAdmin: user.isAdmin,
                isExporter: req.body.isExporter,
                isFarmer: req.body.isFarmer,
                image: req.body.image,
                token: generateToken(user),
            });
            return;
        }
    }
    res.status(401).send({message: 'Invalid email or password'});
 })
);

userRouter.post('/register',
    expressAsyncHandler(async (req,res) =>{
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 7),
            address: req.body.address,
            telephone: req.body.telephone,
            isExporter: req.body.isExporter,
            isFarmer: req.body.isFarmer,
            image: req.body.image,
        });
        const createUser = await user.save();
        res.send({
            _id: createUser._id,
            name: createUser.name,
            email: createUser.email,
            address: createUser.address,
            telephone: createUser.telephone,
            isAdmin: createUser.isAdmin,
            isExporter: createUser.isExporter,
            isFarmer: createUser.isFarmer,
            image: createUser.image,
            token: generateToken(createUser),
        });
    })    
);

userRouter.post('/updateProfile', isAuth,
    expressAsyncHandler(async (req,res) =>{
        const user = await User.findById(req.user._id);
        if(user){
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.address = req.body.address || user.address;
            user.telephone = req.body.telephone || user.telephone;
            // user.isExporter = req.body.isExporter || user.isExporter;
            // user.isFarmer = req.body.isFarmer || user.isFarmer;
            // user.image = req.body.image || user.image;
        }       
        const updateUser = await user.save();
        res.send({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            address: updateUser.address,
            telephone: updateUser.telephone,
            isAdmin: updateUser.isAdmin,
            // isExporter: updateUser.isExporter,
            // isFarmer: updateUser.isFarmer,
            // image: updateUser.image,
            token: generateToken(updateUser),
        });
    })    
);


userRouter.get('/:id', expressAsyncHandler (async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404)
        .send({message: 'User Not Found'});
    }else {
        res.send(user);
    }
}))

export default userRouter;