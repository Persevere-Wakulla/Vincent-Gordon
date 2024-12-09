// Create instance of the Router
import express from "express";
const userRouter = express.Router()

// Load product userRepo module
import userRepo from "../repositories/user-file.js"

userRouter.get("/", (req, res, next) => {
	userRepo.get(
		function (data) {
			// Success Data Recieved
			res.send({
				status: 206,
				statusText: "OK",
				message: "All Users recieved",
				data: data,
			});
		},
		function (err) {
			// Error pass error along to
			// The next Middleware
			next(err);
		}
	);
});

// Get /Search Route
userRouter.get("/search", (req, res, next) => {
	// create search object
	// with parameters from the query line

	let search = {
		name: req.query.name,
		listPrice: req.query.listPrice,
	};
	if (search.name || search.listPrice) {
		userRepo.search(
			search,
			function (data) {
				if (data && data.length > 0) {
					res.send({
						status: 206,
						statusText: "OK",
						message: "Search Succsesful",
						data: data,
					});
				} else {
					let msg = `The search for ${JSON.stringify(
						search
					)} was not successful`;
					res.status(404).send({
						status: 404,
						statusText: "NOT FOUND",
						message: msg,
						error: {
							code: "NOT found",
							message: msg,
						},
					});
				}
			},
			function (err) {
				next(err);
			}
		);
	} else {
		let msg = "No Search parameters passed in";
		res.status(400).send({
			status: 400,
			statusText: "Bad Request",
			message: msg,
			error: {
				code: "Bad Request",
				message: msg,
			},
		});
	}
});
// Get /id  route
userRouter.get("/:id", (req, res, next) => {
	userRepo.getById(
		req.params.id,
		function (data) {
			if (data) {
				res.send({
					status: 206,
					statusText: "OK",
					message: "1 User recieved",
					data: data,
				});
			} else {
				let msg = `The product ${req.params.id} could not be found`;
				res.status(404).send({
					status: 404,
					statusText: "NOT FOUND",
					message: msg,
					error: {
						code: "NOT found",
						message: msg,
					},
				});
			}
		},
		function (err) {
			next(err);
		}
	);
});

// Post route
userRouter.post("/", function (req, res, next) {
	// Pass in the body from request
	userRepo.insert(
		req.body,
		function (data) {
			//success created return 201 status
			res.status(201).send({
				status: 201,
				statusText: "Created",
				message: "New User Added",
				data: data,
			});
		},
		function (err) {
			next(err);
		}
	);
});

//Put route
userRouter.put("/:id", function (req, res, next) {
	// Does product exist to update
	userRepo.getById(
		req.params.id,
		function (data) {
			// Sucess Product is found
			if (data) {
				// Pass in Body from request
				userRepo.update(req.body, req.params.id, function (data) {
					// Success return 200 ok
					res.send({
						status: 200,
						statusText: "OK",
						message: `Product ${req.params.id} updated`,
						data: data,
					});
				});
			} else {
				let msg = `The product ${req.params.id} could not be found`;
				res.status(404).send({
					status: 404,
					statusText: "NOT FOUND",
					message: msg,
					error: {
						code: "NOT found",
						message: msg,
					},
				});
			}
		},
		function (err) {
			next(err);
		}
	);
});

//Delete route
userRouter.delete("/:id", function (req, res, next) {
	// Does product exist to delete
	userRepo.getById(
		req.params.id,
		function (data) {
			// success product found
			if (data) {
				//pass in id from request
				userRepo.delete(req.params.id, function (data) {
					// success return 204 no content
					res.status(204).send();
				});
			} else {
				// product not found
				let msg = `The product ${req.params.id} could not be found`;
				res.status(404).send({
					status: 404,
					statusText: "NOT FOUND",
					message: msg,
					error: {
						code: "NOT found",
						message: msg,
					},
				});
			}
		},
		function (err) {
			next(err);
		}
	);
});
export default userRouter;
