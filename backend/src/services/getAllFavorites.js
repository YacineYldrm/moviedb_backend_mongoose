import { DAO } from "../data-access/index.js";

export const getAllFavorites = async () => {
    const allFavorites = await DAO.getAll("favorites");
    console.log(allFavorites);
    return allFavorites;
};
