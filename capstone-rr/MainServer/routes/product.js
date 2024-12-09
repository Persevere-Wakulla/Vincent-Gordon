// Create instance of the Router
import express from "express";
const productRouter = express.Router()

// Load product productRepo module
import productRepo from "../repositories/product-file.js"


productRouter.get("/", (req, res, next) => {
	productRepo.get(
		function (data) {
			// Success Data Recieved
			res.send({
				status: 206,
				statusText: "OK",
				message: "All products recieved",
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
productRouter.get("/search", (req, res, next) => {
	// create search object
	// with parameters from the query line

	let search = {
		name: req.query.name,
		listPrice: req.query.listPrice,
	};
	if (search.name || search.listPrice) {
		productRepo.search(
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
productRouter.get("/:id", (req, res, next) => {
	productRepo.getById(
		req.params.id,
		function (data) {
			if (data) {
				res.send({
					status: 206,
					statusText: "OK",
					message: "1 product recieved",
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
productRouter.post("/", function (req, res, next) {
	// Pass in the body from request
	productRepo.insert(
		req.body,
		function (data) {
			//success created return 201 status
			res.status(201).send({
				status: 201,
				statusText: "Created",
				message: "New Product Added",
				data: data,
			});
		},
		function (err) {
			next(err);
		}
	);
});

//Put route
productRouter.put("/:id", function (req, res, next) {
	// Does product exist to update
	productRepo.getById(
		req.params.id,
		function (data) {
			// Sucess Product is found
			if (data) {
				// Pass in Body from request
				productRepo.update(req.body, req.params.id, function (data) {
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
productRouter.delete("/:id", function (req, res, next) {
	// Does product exist to delete
	productRepo.getById(
		req.params.id,
		function (data) {
			// success product found
			if (data) {
				//pass in id from request
				productRepo.delete(req.params.id, function (data) {
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
export default productRouter;
