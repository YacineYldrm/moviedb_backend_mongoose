import { DAO } from "../data-access/index.js"

export const editMovie = async (editedMovie) => {
    const result = await DAO.editMovie("favorites", editedMovie);
    return result;
};