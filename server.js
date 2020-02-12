import dotenv from "dotenv";
import express from "express";
import mongoose, { Schema } from "mongoose";

import routes from "./app/routes";
import middlewares from "./app/middlewares";

// Settings app
dotenv.config({});
const PORT = process.env.PORT || 3000;
const app = express();

middlewares(app);
routes(app, {});

// Server start
app.listen(PORT, () => {
    console.log(`app start on ${PORT} port`);
})

