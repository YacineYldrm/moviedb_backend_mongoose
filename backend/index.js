import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import multer from "multer";
import { router } from "./src/router/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001; 

app.use(morgan("dev")); 
app.use(cors());

app.use("/api/movies", router.moviesRouter );
app.use("/api/favorites", router.favoritesRouter);

const startServer = app.listen(PORT);

const connectToDatabase = async () => {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {dbName: "movieDB"})
};

connectToDatabase()
    .then(() => console.log("Connection to database succeeded! Starting server..."))
    .then(startServer)
    .then(() => console.log("Server is listening @ port:", PORT))
    .catch(err => {
        console.log(err);
        mongoose.disconnect();
    });