import mongoose from "mongoose";
import moment from "moment";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true,
    },
    contents: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: -2,
    },
    file_url: {
        type: String,
        default: "",
    },
    create_date: {
        type: String,
        default: moment().format("YYYY-MM-DD hh:mm:ss"),
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment",
        },
    ],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
});

const Post = mongoose.model("post", PostSchema);

export default Post;