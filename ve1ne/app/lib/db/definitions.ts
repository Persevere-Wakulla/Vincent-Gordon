import { z } from 'zod'
 
export const SignupFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
})
export type FormState =
	| {
			errors?: {
				username?: string[];
				email?: string[];
        salt?:string[];
        role?:string[];
				password?: string[];
				createdAt?:number[];
				updatedAt?:number[]
			}
			message?: string;
	  }
	| undefined;

  export type UserType = {
    id: string;
    username: string;
    email: string;
    password: string;
  };

  export type SessionPayload = {
    userId:string;
    role:string;
    expiresAt:Date;

  }