import { ObjectId } from "mongodb";
import { Favorite, Movie } from "../models/index.js";

// ===========================================================================
//                             get all movies
// ===========================================================================

export const getAll = async (collectionName) => {
    if(collectionName === "movies") {
        const allMovies = await Movie.find();
        return allMovies;
    };
    if (collectionName === "favorites"){
        const allMovies = await Favorite.find();
        return allMovies;
    };
};

// ===========================================================================
//                             get movie by id
// ===========================================================================

export const getById = async (collectionName, id) => {
    if(collectionName === "movies"){
        const movie = await Movie.findOne({ _id: ObjectId.createFromHexString(id)});
        return movie;
    };
    if (collectionName === "favorites"){
        const movie = await Favorite.findOne({ _id: ObjectId.createFromHexString(id)});
        return movie;
    };
};

// ===========================================================================
//                             search by user input
// ===========================================================================

export const searchByKeyword = async (collectionName, userInput) => {
    if(collectionName === "movies"){
        const movie = await Movie.find({title: {$regex: userInput, $options: 'i'}});
        return movie;
    };
    if(collectionName === "favorites"){
        const movie = await Favorite.find({title: {$regex: userInput, $options: 'i'}});
        return movie;
    };
};

// ===========================================================================
//                          find and delete by id
// ===========================================================================

export const findAndDeleteById = async (id) => {
        const movie = await Favorite.findOneAndDelete({_id: ObjectId.createFromHexString(id)});
        return movie;
};

// ===========================================================================
//                          Add movie to collection
// ===========================================================================

export const addMovie = async (collectionName, document) => {
    if(collectionName === "movies"){
        const newMovie = await Movie.create(document);
        return newMovie;
    };
    if(collectionName === "favorites"){
        const newMovie = await Favorite.create(document);
        return newMovie;
    };
};

// ===========================================================================
//                              Edit movie
// ===========================================================================

export const editMovie = async (collectionName, document) => {
    const documentId = document._id;
    delete document._id;
    console.log(documentId);
    if(collectionName === "movies"){
        const editedMovie = await Movie.findOneAndReplace({_id: ObjectId.createFromHexString(documentId)}, document, { returnDocument: "after"});
        return editedMovie;
    };
    if(collectionName === "favorites"){
        const editedMovie = await Favorite.findOneAndReplace({_id: ObjectId.createFromHexString(documentId)}, document, { returnDocument: "after"});
        return editedMovie;
    };
};

// ===========================================================================
//                              add favorites
// ===========================================================================

export const addMovieToFavorites = async (id) => {
    const movie = await Movie.aggregate([{$match: {_id: ObjectId.createFromHexString(id)}}, {$merge: "favorites"}]);
    return movie;
};
