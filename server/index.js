import express from 'express';
import connectDB from './db.js';
const app = express();

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send("Welcome to iNotebook");
})

app.listen(port, (req, res) => {
    connectDB()
    console.log(`App is listening on port ${port}...`);
})