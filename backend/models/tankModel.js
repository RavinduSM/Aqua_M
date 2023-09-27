import mongoose from "mongoose";

const tankSchema = new mongoose.Schema(
    {
        length1 : {type: String, required: true},
        length2 : {type: String, required: true},
        fishName : { type: String, required: false},
        fishLength : {type: String, requires: true},
        fishCal : {type : String, required: false},    
        farmer: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    },
    {
        timestamps: true,
    }
);

const Tank = mongoose.model('Tank', tankSchema);

export default Tank;