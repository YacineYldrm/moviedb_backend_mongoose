import { DAO } from "../data-access/index.js";

export const getAllMovies = async () => {
    const allMovies = await DAO.getAll("movies");
    console.log(allMovies);
    return allMovies;
};
