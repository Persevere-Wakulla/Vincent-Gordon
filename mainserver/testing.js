import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect("mongodb://127.0.0.1/DevGordon").then(() => {
	console.log("App connected at");
	app.listen(3333, () => {
		console.log("at http://localhost:3333");
	});
});

const AddressSchema = new mongoose.Schema({
	street: String,
	city: String,
});
const UserSchema = new mongoose.Schema({
	name: String,
	age: {
		type: Number,
		min: 1,
		max: 100,
		validate: {
			validator: (v) => v % 2 === 0,
			message: (props) => `${props.value} is not an even number`,
		},
	},
	email: {
		minLength: 10,
		type: String,
		required: true,
		lowercase: true,
	},
	createdAt: {
		type: Date,
		default: () => Date.now(),
		immutable: true,
	},

	updatedAt: {
		type: Date,
		default: () => Date.now(),
	},
	bestFriend: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "Test",
	},
	hobbies: [String],
	address: AddressSchema,
});

UserSchema.methods.check_if_user_exists = function () {
    console.log(`hey my name is ${this.name}`);
    
}

UserSchema.statics.findByName = function (name) {
    return this.find({name: new RegExp(name,'i')})
}

UserSchema.query.byName = function (name) {
       return this.where({name: new RegExp(name,'i')})
}

UserSchema.virtual('namedEmail').get(function () {
    return `${this.name} ${this.email}`
})

UserSchema.pre('save',function(next) {
    this.updatedAt = Date.now()
    next()
})
UserSchema.post('save',function(doc,next) {
    doc.check_if_user_exists()
    next()
})

const User = mongoose.model("Test", UserSchema);

const run = async () => {
	try {
		const find = await User.exists({ email: "ggggg@ggg.com" });
		console.log("found", find._id);
	const get = await User.find().byName(find)
    console.log('GOT',get);
    

		const user = await User.create({
			name: "Vinny",
			age: 38,
			email: "ggggg@ggg.com",
			hobbies: ["Xbox", "Coding"],
			address: {
				street: "Ackulla",
				city: "Drive",
			},
		});
        user.check_if_user_exists()
		user.bestFriend = find._id;
        user.populate("bestFriend")
		await user.save();
		user.name = "Vince";
		await user.save();
		console.log(user.namedEmail);
		console.log("User saved", user);
	} catch (e) {
		console.log(e.message);
	}
};
run();
