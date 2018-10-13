const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {Type: String, required: true},
    price: {Type: Number, required: true}
});

module.exports = mongoose.model("Product", productSchema);