import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import LoginRouter from "./routes/login-route.js";
import SignUpRouter from "./routes/signUp-route.js";
import hotelRouter from "./routes/hotel-routes.js";
import paymentRouter from "./routes/payment-route.js";

const server = express();
const port = 5000;

server.use(cors());
server.use(express.json());

let url = 'mongodb://localhost:27017/test'; // Update with your database name

mongoose.connect(url)
    .then(() => {
        server.listen(port, () => {
            console.log(`Connected to port ${port}`);
        });
    })
    .catch((err) => console.log(err));

server.use('/loginServer', LoginRouter);
server.use('/signUpServer', SignUpRouter);
server.use('/hotelServer', hotelRouter);
server.use('/paymentServer', paymentRouter);

// Error handling middleware
server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
