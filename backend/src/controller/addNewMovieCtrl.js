import { services } from "../services/index.js";

export const addNewMovieCtrl = async (req, res) => {
    const newMovie = req.body;
    try{
        const addedMovie = await services.addNewMovie(newMovie);
        res.json({success: true, result: addedMovie});
    }catch(err){
        console.log(err);
        res.json({success: false, error: err});
    };  
};