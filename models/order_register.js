const {Schema, model } = require("mongoose");


const OrderSchema = new Schema({
    name : {
        type : String,
        required : [true, "Name is required."],
        minlength: [4, "Name must contain at least 4 characters."],
    },
    price  : {
        type : String,
        required : [true, "Price is required."],
        minlength: [4, "Price must contain at least 4 characters."],
    },
    quantity : {
        type : String,
        required : [true, "Quantity required."],
    },
},
    {timestamps : true}
);



module.exports = model("order", OrderSchema);