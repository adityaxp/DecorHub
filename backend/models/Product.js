const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        supplier: { type: String, required: true },
        price: { type: String, required: true },
        imageUrl: { type: String, required: true },
        description: { type: String, required: true },
        product_location:{ type: String, required: true },
        product_colors: [
            { title: {type: String, default: "0001"}, hexCode: {type: String, default:"#FF5722"} },
            { title: {type: String, default: "0002"}, hexCode: {type: String, default:"#2196F3"} },
            { title: {type: String, default: "0003"}, hexCode: {type: String, default:"#FFC107"} },
            { title: {type: String, default: "0004"}, hexCode: {type: String, default:"#F5F5F5"} },
            { title: {type: String, default: "0005"}, hexCode: {type: String, default:"#212121"} },
            ]
    }, { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema)