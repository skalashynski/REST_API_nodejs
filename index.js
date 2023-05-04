import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/route.js'

const app = express();
app.use(bodyParser.json());
app.use('/users', userRoutes);

app.listen(3000, ()=> console.log("App is started"));
