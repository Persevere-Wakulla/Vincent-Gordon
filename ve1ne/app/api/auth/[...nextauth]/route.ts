import NextAuth from "next-auth"
import { authOptions } from "@/authOptions"
import  getServerSession  from "next-auth/"
import { signOut } from "@/auth"

const handler = NextAuth(authOptions)

export { handler as GET}


export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new Response("Unauthorized", { status: 401 })
  }

  // Perform sign-out logic here
  await signOut({ redirect: false })

  return new Response(JSON.stringify({ message: "Signed out" }), { status: 200 })
}