import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
    {
        farmer: {type:String, required:true},
        //{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        itemName: {type: String, required: true},
        //{type:mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
        qty: {type:Number, required: true},
        unitPrice: {type:Number, required: true},
        //totPrice: {type: Number, required: true},       
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
        // orderDate: {type: Date},
        // requiredDate: {type: Date},
    },
    {
        timestamps:true,
    }
)

const Order = mongoose.model('Order', orderSchema);
export default Order;