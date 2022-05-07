import express, { application } from "express";
import path from 'path';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import tankRouter from "./routers/tankRouter.js";
import messageRouter from "./routers/messageRouter.js";
import uploadRouter from "./routers/uploadRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true})); // using these 2 middlewares to express all requests lhat conatains data like signin

mongoose.connect( process.env.MONGODB_URL || 'mongodb://localhost:27017/aquam',{
    useNewUrlParser: true,
});


app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/tanks', tankRouter);
app.use('/api/orders', orderRouter);
app.use('/api/messages', messageRouter);
app.use('/api/uploads', uploadRouter);

const __dirname = path.resolve();
app.use('/profileImgUploads', express.static(path.join(__dirname, '/uploads')));

app.get('/', (req,res) => {
    res.send('server is ready');
});

app.get('/fishPredictions', function (req,res){
    var spawn = require('child_process').spawn;
    var process = spawn('python', ['.finalTest.py', req.query.fishName]);
    process.stdout.on('data', function(data) {
        res.send(data.toString());
    });
})


//error catcher
app.use((err, req, res, next) =>{
    res.status(500).send({message: err.message});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
    console.log(`Try Getting Aggregated fishData data at http://localhost:${port}/fishPredictions?fishName='Zaebra'`);
});