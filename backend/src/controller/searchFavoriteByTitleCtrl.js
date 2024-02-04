import { services } from "../services/index.js";

export const searchFavoriteByTitleCtrl = async (req, res) => {
    const movieTitle = req.params.keyInput;
    try {
        const matchedMovieTitles = await services.searchFavoriteByTitle(movieTitle);
        res.json({success: true, result: matchedMovieTitles});
    } catch (err) {
        res.json({success: false, error: err});   
    };
};