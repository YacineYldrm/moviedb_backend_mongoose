import { services } from "../services/index.js"

export const getMovieByIdCtrl = async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const movie = await services.getMovieById(movieId);
        res.json({success: true, result: movie})
    } catch (err) {
        res.json({success: false, error: err});
    };
};