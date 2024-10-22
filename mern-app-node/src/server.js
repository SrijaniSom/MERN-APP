import express from 'express';
import connectDB from '../config/db.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config({});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Port started at ${port}`);
})

connectDB();