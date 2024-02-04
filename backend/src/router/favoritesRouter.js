import express  from "express";
import { controller } from "../controller/index.js";

const favoritesRouter = express.Router();

favoritesRouter.get("/", controller.getAllFavorites);

favoritesRouter.get("/:movieId", controller.getFavoriteById);

favoritesRouter.get("/search/:keyInput", controller.searchFavoriteByTitle);

favoritesRouter.patch("/:movieId", controller.addNewFavorite);

favoritesRouter.delete("/delete/:movieId", controller.deleteFavorite);

favoritesRouter.put("/edit", express.json(), controller.editMovie);

export default favoritesRouter;



