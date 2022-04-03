import mongoose from "mongoose";

const tankSchema = new mongoose.Schema(
    {
        // length1 : {type: Number, required: true},
        // length2 : {type: Number, required: true},
        fishName : { type: String, required: true},
        // fishLength : {type: Number, requires: true},
        // fishCal : {type : Number, required: true},     
    },
    {
        timestamps: true,
    }
);

const Tank = mongoose.model('Tank', tankSchema);

export default Tank;