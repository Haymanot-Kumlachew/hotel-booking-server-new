const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const paymentSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    paymentCode:{
        type: String,
        required: true,
        unique:true
    },
    amount:{
        type: String,
        required: true
    },
    isTotallyPayed:{
        type: Boolean,
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("payments", paymentSchema)