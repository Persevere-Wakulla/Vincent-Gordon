import mongoose from 'mongoose';



const userSchema = mongoose.Schema(
    {
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	userName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
	
	},
	password: {
		type: String,
		minLength: 8,
		required: true,
	},
	confirm: {
		type: String,
		minLength: 8,
		required: true,
	},
},
{
    timestamps:true,
}
);

export const User = mongoose.model('NewUser',userSchema)

