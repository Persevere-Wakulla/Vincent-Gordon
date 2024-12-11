"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { deleteSession } from "@/lib/db/session";
import { usePathname } from "next/navigation";

export default function SignOutButton() {
	const path = usePathname();
	const [count, setCount] = useState(false);
	useEffect(() => {
		if (path === "/dashboard" && count === false) {
			// window.location.reload();
			// setCount((c) => !c);
		}
	},[]);
	const { status } = useSession();
	const router = useRouter();

	return (
		<>
			{status === "authenticated" ? (
				<button
					className="border border-solid border-black rounded"
					onClick={() => {
						signOut({ redirect: false }).then(() => {
							deleteSession();
							// setCount((c) => !c);
							router.push("/");
						});
					}}
				>
					Sign Out{" "}
				</button>
			) : status === "loading" ? (
				<span className="text-[#888] text-sm mt-7">Loading...</span>
			) : (
				<Link
					href="/login"
					className="border border-solid border-black rounded"
				>
					Sign In
				</Link>
			)}
		</>
	);
}
