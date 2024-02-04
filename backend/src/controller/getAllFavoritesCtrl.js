import { services } from "../services/index.js";

export const getAllFavoritesCtrl = async (_, res) => {
    try {
        const allFavorites = await services.getAllFavorites();
        res.json({success: true, result: allFavorites});
    } catch (err) {
        res.json({success: false, error: err});
    };
};