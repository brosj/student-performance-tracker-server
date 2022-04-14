import * as dotenv from "dotenv";
dotenv.config();

const  cors = require ( "cors");
import express from 'express';
import logger from 'morgan';
import mongoose from 'mongoose';

import router from './routes/route';

const app = express();

const api: string | undefined = process.env.API_URL

// Middleware
app.use(cors()); // Cross-Origin Resource Sharing
app.options("*", cors()); // Preflight request
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoose.Promise = global.Promise;
const database_userName = process.env.DATABASE_USERNAME;
const database_password = process.env.DATABASE_PASSWORD;
const database_name = process.env.DATABASE_NAME;


// Database connection
mongoose
  .connect(`mongodb+srv://${database_userName}:${database_password}@cluster0.tiba7.mongodb.net/${database_name}?retryWrites=true&w=majority`)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

app.use(`${api}`, router);

export default app;
