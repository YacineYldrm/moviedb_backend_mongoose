import { DAO } from "../data-access/index.js";

export const searchFavoriteByTitle = async (movieTitle) => {
    const matchedMovieTitles = await DAO.searchByKeyword("favorites", movieTitle);
    return matchedMovieTitles;
};