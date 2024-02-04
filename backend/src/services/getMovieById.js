import { DAO } from "../data-access/index.js"

export const getMovieById = async (movieId) => {
    const movie = await DAO.getById("movies", movieId)
    return movie;
};