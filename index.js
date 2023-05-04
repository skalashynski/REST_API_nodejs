import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/route.js'
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const MONGO_PASS = process.env.MONGO_PASSWORD;
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_HOST = process.env.MONGO_HOST;
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use('/users', userRoutes);

start();

async function start() {
    try {
        mongoose.set("strictQuery", false)
        await mongoose.connect(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASS}@${MONGO_HOST}/test`);
        console.log("Connected to Mongo")
        app.listen(PORT, () => console.log("App is started"));
    } catch (error) {
        console.log(`Error to connect to Mongo`)
        console.log(error)
    }
}
