import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true},
        tele: {type: Number, required: true},
        msg: {type: String, required: true}
    },
    {
        timestamps: true,
    }
);

const Message = mongoose.model('Message',messageSchema);
export default Message;