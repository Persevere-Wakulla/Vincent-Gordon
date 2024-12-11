"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { SignupFormSchema } from "@/lib/db/definitions";
import { connectToDatabase } from "@/lib/db/db";
import { myUser } from "@/lib/models/userModel";
import bcrypt from "bcrypt";
import { deleteSession } from "@/lib/db/session";

export async function signup(formData: FormData) {
	await connectToDatabase();

	// Validate form fields
	const validatedFields = SignupFormSchema.safeParse({
		username: formData.get("username"),
		email: formData.get("email"),
		password: formData.get("password"),
	});

	if (!validatedFields.success) throw new Error("Validation Falied");

	const { username, email, password } = validatedFields.data;
	// Check if user already exists
	const existingUser = await myUser.exists({ email });
	if (existingUser) throw new Error("Email already in use");

	const existingUsername = await myUser.exists({ username });
	if (existingUsername) throw new Error("Username already taken");
	// Hash the password
	const hashedPassword = await bcrypt.hash(password, 10);

	// Create and save the new user
	const user = new myUser({
		username,
		email,
		password: hashedPassword,
	});

	await user.save();

	// Return a success message
	return { success: true, message: "User created successfully" };
}

export async function authenticate(
	prevState: string | undefined,
	formData: FormData
) {
	try {
		await signIn("credentials", formData);
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return "Invalid credentials.";
				default:
					return "Something went wrong.";
			}
		}
		throw error;
	}
}
export async function logout() {
	deleteSession()
	
  }