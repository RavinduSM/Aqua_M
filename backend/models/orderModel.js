import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
    {
        seller: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        itemName: {type:mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
        qty: {type:Number, required: true},
        price: {type:Number, required: true},
        totPrice: {type: Number, required: true},
        addresss: {type: String, required: true},
        tele: {type: String, required: true},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    },
    {
        timestamps:true,
    }
)

const Order = mongoose.model('Order', orderSchema);
export default Order;