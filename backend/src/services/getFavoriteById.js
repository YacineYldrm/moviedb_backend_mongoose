import { DAO } from "../data-access/index.js"

export const getFavoriteById = async (movieId) => {
    const movie = await DAO.getById("favorites", movieId)
    return movie;
};