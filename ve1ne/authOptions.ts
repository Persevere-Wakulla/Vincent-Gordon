// authOptions.ts
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { connectToDatabase } from "@/lib/db/db";
import type { UserType } from "@/lib/db/definitions";
import { User } from "@/lib/models/userModel";
import { z } from "zod";
import bcrypt from "bcrypt";

async function getUser(email: string): Promise<UserType | undefined> {
  await connectToDatabase();
  try {
    const user = await User.findOne<UserType>(
      { email: email },
      "_id email password"
    ).exec();
    if (user) return user;
  } catch (e) {
    console.error(e);
    throw new Error("Failed");
  }
}

export const authOptions = {
  ...authConfig,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Authorize function called with credentials:", credentials);
        try {
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(8) })
            .safeParse(credentials);

          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;

            const user = await getUser(email);
            if (!user) {
              console.log("User not Found!");
              return null;
            }

            const passwordsMatch = await bcrypt.compare(
              password,
              user.password
            );
            if (passwordsMatch) {
              console.log("Pass words match, returning user");
              return user;
            } else {
              console.log("Invalid Password");
              return null;
            }
          } else {
            console.log("Invalid Credentials Format");
            return null;
          }
        } catch (error) {
          console.log("Authorization Error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};