import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config()

const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING);

let _db;

export const getDb = async () => {
    if(_db) return _db
    await client.connect();
    const db = client.db("movieDB");
    _db = db;
    return db;
};