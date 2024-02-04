import express  from "express";
import { controller } from "../controller/index.js";

const moviesRouter = express.Router();

moviesRouter.get("/", controller.getAllMovies);

moviesRouter.get("/:movieId", controller.getMovieById);

moviesRouter.get("/search/:keyInput", controller.searchMovieByTitle);

moviesRouter.post("/", express.json(), controller.addNewMovie);

export default moviesRouter;