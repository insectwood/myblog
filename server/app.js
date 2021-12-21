import express from "express";
import mongoose from "mongoose"
import config from "./config"

import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

//Routes
import postsRoutes from "../server/routes/api/post"

const app = express()
const {MONGO_URI} = config

app.use(hpp());
app.use(helmet());

app.use(cors({orgin: true, credentials: true}));
app.use(morgan("dev"));

app.use(express.json());

mongoose.connect(MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
}).then(() => console.log("success conntectin MongoDB"))
    .catch((e) => console.log(e));

//Use router
app.get('/');
app.use('/api/post', postsRoutes);

export default app;