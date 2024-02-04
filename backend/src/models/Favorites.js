import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
    title: {type: String, required: true},
    year: {type: Number, required: true},
    rated: {type: String},
    runtime: {type: Number},
    countries: [
        {type: String}
    ],
    genres: [
        {type: String}
    ],
    director: {type: String, required: true},
    writers: [
        {type: String}
    ],
    actors: [
      {type: String}
    ],
    plot: {type: String},
    poster: {type: String},
    imdb: {
        id: { type: String},
        rating: { type: Number, min: 1, max: 10, required: true},
        votes: { type: Number}
    },
    tomato: {
        meter: { type: Number},
        image:  { type: String},
        rating: { type: Number},
        reviews: { type: Number},
        fresh: { type: Number},
        consensus: { type: String},
        userMeter: { type: Number},
        userRating: { type: Number},
        userReviews: { type: Number}
    },
    metacritic: { type: Number},
    awards: {
        wins: { type: Number},
        nominations: { type: Number},
        text: {type: String}
    },
    type: {type: String},
}, { collection: "favorites"});

export const Favorite = mongoose.model("Favorite", favoriteSchema);