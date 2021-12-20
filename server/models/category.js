import mongoose from "mongoose";

// Create Schema
const CategorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        default: "unclassified",
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
        },
    ],
});

const Category = mongoose.model("category", CategorySchema);

export default Category;