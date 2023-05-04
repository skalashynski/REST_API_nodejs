import dotenv from 'dotenv'

dotenv.config()
const MONGO_PASS = process.env.MONGO_PASSWORD;
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;


export const mongo = {
    url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DB_NAME}`
};