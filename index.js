import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/route.js'
import mongoose from "mongoose";
import dotenv from 'dotenv'
import {configs} from "./config/index.js";

dotenv.config()
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use('/users', userRoutes);

start();

async function start() {
    try {
        mongoose.set("strictQuery", false)
        await mongoose.connect(configs.mongo.url);
        console.log("Connected to Mongo")
        app.listen(PORT, () => console.log("App is started"));
    } catch (error) {
        console.log(`Error to connect to Mongo`)
        console.log(error)
    }
}
