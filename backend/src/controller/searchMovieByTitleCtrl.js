import { services } from "../services/index.js";

export const searchMovieByTitleCtrl = async (req, res) => {
    const movieTitle = req.params.keyInput;
    try {
        const matchedMovieTitles = await services.searchMovieByTitle(movieTitle);
        res.json({success: true, result: matchedMovieTitles});
    } catch (err) {
        res.json({success: false, error: err});
    };
};