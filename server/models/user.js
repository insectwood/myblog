import mongoose from "mongoose";
import moment from "moment";

//create schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "user", "guest"],
        default : "guest"
    },
    create_date: {
        type: Date,
        default: moment().format("YYYY-MM-DD hh:mm:ss"),
    },
    comments: [
        {
            post_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "post",
            },
            comment_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "comments",
            },
        },
    ],
    post: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "posts",
        },
    ],
});

//schema naming
const User = mongoose.model("user", UserSchema);

//modulization
export default User;
