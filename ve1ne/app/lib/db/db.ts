"use server";

import mongoose from "mongoose";
const DB = process.env.DB_URL;


const connectToDatabase = async () => {
	if(mongoose.connection.readyState === 0 ){

		await mongoose
			.connect(DB as string)
			.then(async () => {
				console.log("Connected to DB");
			})
			.catch((err) => {
				console.error("Error connecting to MongoDb", err);
			});
	}
};

export {connectToDatabase};
