import mongoose from "mongoose";

const dataSchema =new  mongoose.Schema({
    data: {
        type: String,
        default: 'no data send'
    }
},{timestamps: true})

export const data = mongoose.model('data',dataSchema);