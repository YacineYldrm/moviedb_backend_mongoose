import { addMovieToFavorites } from "./addMovieToFavorites.js";
import { addNewMovie } from "./addNewMovie.js";
import { deleteFavorite } from "./deleteFavorite.js";
import { editMovie } from "./editMovie.js";
import { getAllFavorites } from "./getAllFavorites.js";
import { getAllMovies } from "./getAllMovies.js";
import { getFavoriteById } from "./getFavoriteById.js";
import { getMovieById } from "./getMovieById.js";
import { searchFavoriteByTitle } from "./searchFavoriteByTitle.js";
import { searchMovieByTitle } from "./searchMovieByTitle.js";

export const services = {
    searchFavoriteByTitle,
    getFavoriteById,
    getAllMovies,
    searchMovieByTitle,
    addNewMovie,
    editMovie,
    getMovieById,
    addMovieToFavorites,
    deleteFavorite,
    getAllFavorites
};

