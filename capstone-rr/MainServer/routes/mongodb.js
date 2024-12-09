// Create instance of the Router
import express from "express";
import { User } from "../db/Models/userModel.js";

const mongoRouter = express.Router();

// Get all Users
mongoRouter.get("/users", async (req, res, next) => {
	try {
		const user = await User.find({});
		res.status(200).json({
			count: user.length,
			data: user,
		});
	} catch (e) {
		console.log(e.message);
		res.status(500).send({
			message: e.message,
		});
		next(e.message);
	}
});

// Get /Search Route / GEt one user
// from DataBAse
mongoRouter.get("/users/search/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id);
		res.status(200).json(user);
	} catch (e) {
		console.log(e.message);
		res.status(500).send({
			message: e.message,
		});
		next(e.message);
	}
});
mongoRouter.get("/users/check/:uName", async (req, res, next) => {
	try {
		const { uName } = req.params;
		const user = await User.find({userName: uName});
		res.status(200).json(user);
	} catch (e) {
		console.log(e.message);
		res.status(500).send({
			message: e.message,
		});
		next(e.message);
	}
});

// Post route
// Save new User
mongoRouter.post("/add", async (req, res, next) => {
	try {
		// Validate if all fields are all filled
		// if not send message
		if (
			!req.body.firstName ||
			!req.body.lastName ||
			!req.body.userName ||
			!req.body.email ||
			!req.body.password ||
			!req.body.confirm
		)
			return res.status(400).send({
				message: "All Fields Required!!!",
			});

		const findUser = await User.exists({ email: req.body.email });
		if (findUser)
			return res.status(209).send({
				status: 209,
				statusText: "Email Already has an Account Linked to It",
			});
		const findUserName = await User.exists({ userName: req.body.userName });
		if (findUserName)
			return res.status(210).send({
				status: 210,
				statusText: "UserName has been Claimed Please Try new Name.",
			});

		const newUser = {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			userName: req.body.userName,
			email: req.body.email,
			password: req.body.password,
			confirm: req.body.confirm,
		};
		const user = await User.create(newUser);
		return res.status(201).send(user);
	} catch (e) {
		console.log(e.message);
		res.status(500).send({
			message: e.message,
		});
		next(e.message);
	}
});

//Put route
mongoRouter.put("/users/edit/:id", async (req, res, next) => {
	try {
		// if not send message
		if (
			!req.body.firstName ||
			!req.body.lastName ||
			!req.body.userName ||
			!req.body.email ||
			!req.body.password ||
			!req.body.confirm
		)
			return res.status(400).send({
				message: "All Fields Required!!!",
			});

		const { id } = req.params;

		const result = await User.findByIdAndUpdate(id, req.body);

		if (!result)
			return res.status(404).json({
				message: "User not Found",
			});

		return res.status(200).send({
			message: "User updated Successfully",
		});
	} catch (e) {
		console.log(e.message);
		res.status(500).send({
			message: e.message,
		});
		next(e.message);
	}
});

//Delete route
mongoRouter.delete("/users/:id", async (req, res, next) => {
	// Does user exist to delete
	try {
		const { id } = req.params;
		const result = await User.findByIdAndDelete(id);
		if (!result)
			return res.status(404).json({
				message: "User deleted Successfully",
			});
	} catch (e) {
		console.log(e.message);
		res.status(500).send({
			message: e.message,
		});
		next(e.message);
	}
});
export default mongoRouter;
