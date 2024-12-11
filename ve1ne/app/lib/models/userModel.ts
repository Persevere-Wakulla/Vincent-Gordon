"use server";
import mongoose,{Schema,model} from "mongoose";
import validator from "validator"

// Declare the Schema of the Mongo model
export interface UserDocument {
	_id: string;
	username: string;
	email: string;
	password: string;
	role: string;
	salt: string;
	createdAt: Date;
	updatedAt: Date;
  }
type isStrongPassword=()=>{}
const UserSchema = new Schema<UserDocument>({
	username: {
		type: String,
		required: true,
		index: true,
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
		minLength: 10,
	},
	
	password: {
		type: String,
		required: true,
		validate: (value:string) => validator.isStrongPassword(value)<isStrongPassword>,
	},
	role: {
		type: String,
		default: "user",
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
});




const myUser =  mongoose.models.myUser || model<UserDocument>("myUser", UserSchema);

export  {myUser};
