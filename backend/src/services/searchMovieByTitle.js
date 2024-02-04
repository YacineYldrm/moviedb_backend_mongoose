import { DAO } from "../data-access/index.js";

export const searchMovieByTitle = async (movieTitle) => {
    const matchedMovieTitles = await DAO.searchByKeyword("movies", movieTitle);
    return matchedMovieTitles;
};