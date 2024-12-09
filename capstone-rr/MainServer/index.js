// Load the express module
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// Load the config module
import config from "config";
import productRouter from "./routes/product.js";
import userRouter from "./routes/users.js";
import errorHelper from "./helpers/errors.js";
import mongoRouter from "./routes/mongodb.js";
//Create an instance of express
const app = express();
// Create instance of a router
const router = express.Router();

// Set the production modev
// process.env["NODE_ENV"] = "production"

// get host server address

const HOST = config.get("HOST");
// Get prefix for api call
const API = config.get("API");
// Specify the port to use for this server
const PORT = config.get("PORT");
// Get mongo_DB_Url to use for this server
const DB_URL = config.get("MONGO_DB_URL");
// Get Origin,Methods and Headers
const METHODS = config.get("METHODS");
const ORIGIN = config.get("ORIGIN");
const HEADERS = config.get("HEADERS");

// Config JSON parsing
app.use(express.json());
// Middleware for handling CORS POLICY
// Option 1: Allow ALl Origins with Default of cors(*)
// app.use(cors());
// Option 2: Allow custom origins {Better Way}
// we have more control over it
app.use(
	cors({
		ORIGIN,
		METHODS,
		HEADERS,
	})
);
// Config router with prefix api
app.use(API, router);
// Mount routes from module
router.use("/products", productRouter);
router.use("/users", userRouter);
router.use("/mongodb", mongoRouter);

// Load Error helper Module
//configure exception logger to console
app.use(errorHelper.errorToConsole);
// Configure exception logger to file
app.use(errorHelper.errorToFile);
// Configure final exception middleware
app.use(errorHelper.errorFinal);

// Create web server to listen
// Wrap Express with Mongoose in\
// try catch block
mongoose
	.connect(DB_URL)
	.then(() => {
		console.log("App Connected to DataBase");
		app.listen(PORT, () => console.log(`at ${HOST}:${PORT}`));
	})
	.catch((e) => {
		console.log(e);
	});
