import { services } from "../services/index.js"

export const deleteFavoriteCtrl = async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const deletedFavorite = await services.deleteFavorite(movieId);
        res.json({success: true, result: deletedFavorite});
    } catch (err) {
        res.json({success: false, error: err});
    };
}; 