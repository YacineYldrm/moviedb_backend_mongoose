import { addMovieToFavoritesCtrl } from "./addMovieToFavoritesCtrl.js";
import { addNewMovieCtrl } from "./addNewMovieCtrl.js";
import { deleteFavoriteCtrl } from "./deleteFavoriteCtrl.js";
import { editMovieCtrl } from "./editMovieCtrl.js";
import { getAllFavoritesCtrl } from "./getAllFavoritesCtrl.js";
import { getAllMoviesCtrl } from "./getAllMoviesCtrl.js";
import { getFavoriteByIdCtrl } from "./getFavoriteByIdCtrl.js";
import { getMovieByIdCtrl } from "./getMovieByIdCtrl.js";
import { searchFavoriteByTitleCtrl } from "./searchFavoriteByTitleCtrl.js";
import { searchMovieByTitleCtrl } from "./searchMovieByTitleCtrl.js";

export const controller = {
    searchFavoriteByTitle: searchFavoriteByTitleCtrl,
    getFavoriteById: getFavoriteByIdCtrl,
    getAllMovies: getAllMoviesCtrl,
    searchMovieByTitle: searchMovieByTitleCtrl,
    addNewMovie: addNewMovieCtrl,
    editMovie: editMovieCtrl,
    getMovieById: getMovieByIdCtrl,
    addNewFavorite: addMovieToFavoritesCtrl,
    deleteFavorite: deleteFavoriteCtrl,
    getAllFavorites: getAllFavoritesCtrl
};
