import express from 'express';
import multer from 'multer';
const uploadRouter = express.Router();

//storage engine
const storeProfile = multer.diskStorage({
    destination(req, file, cb){
        cb(null, 'uploads/');
    },
    filename(req, file, cb){
        cb(null, `${Date.now()}.jpg`)
    },
})

const upload = multer({ storeProfile });

uploadRouter.post('/', upload.single('image'),(req, res) =>{
    res.send(`/${req.file.path}`);
})

export default uploadRouter;
