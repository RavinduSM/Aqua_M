import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {type: String, required: true},
    telephone: {type: String, required: true},
    isAdmin: {type: Boolean, default: false, required: true},  
    isExporter: {type: Boolean, default: false, required: true},  
    isFarmer: {type: Boolean, default: false, required: true},
    image: {type: String, required: false},  
}, 
   {
    timestamps: true,
   }
);

const User = mongoose.model('User', userSchema);
export default User;
