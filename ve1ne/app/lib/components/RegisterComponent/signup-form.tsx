"use client";

import {
	AtSymbolIcon,
	KeyIcon,
	UserCircleIcon,
	EyeIcon,
	EyeSlashIcon,
	ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { signup } from "@/actions/actions";
import { useState } from "react";
import { Button } from "@/app/lib/components/RegisterComponent/button";
import {useRouter}  from "next/navigation";

export default function SignupForm() {
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const router = useRouter()
	type refs = "password" | "text";
	let [refs, setRefs] = useState("password");

	const swapRefs = (str: refs) => {
		if (refs === "password") {
			setRefs(str);
		}
		if (refs === "text") setRefs(str);
	};
  
	const handleSubmit = async (event:any) => {
	  event.preventDefault();
	  const formData = new FormData(event.target);
  
	  try {
		const response = await signup(formData);
		if (response.success) {
		  setSuccess("Signup successful! Redirecting to login...");
		//   Perform client-side redirect here, e.g., using next/router
		  router.push("/login");
		} else {
		  setError(response.message);
		}
	  } catch (error:any) {
		setError(error.message);
	  }
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
		
			<div>
				<label
					htmlFor="username"
					className="block text-sm font-medium leading-6 text-gray-100"
				>
					Username
				</label>
				<div className="mt-2 relative">
					<input
						id="username"
						name="username"
						type="text"
						autoComplete="username"
						required
						autoFocus
						placeholder="Enter your username"
						className="peer block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 pl-9 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
						 "
					/>
					<UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-indigo-500" />
				</div>
			</div>
		
			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium leading-6 text-gray-100"
				>
					Email
				</label>
				<div className="mt-2 relative">
					<input
						id="email"
						name="email"
						type="text"
						autoComplete="email"
						required
						placeholder="Enter your email address"
						className="peer block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-9 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
					<AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-indigo-500" />
				</div>
			</div>
			
			<div>
				<div className="flex items-center justify-between relative ">
					<label
						htmlFor="password"
						className="peer block text-sm font-medium leading-6 text-gray-100"
					>
						Password
					</label>
					{refs === "text" ? (
						<EyeSlashIcon
							onClick={() => swapRefs("password")}
							className="peer  absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-indigo-500"
						/>
					) : (
						<EyeIcon
							onClick={() => swapRefs("text")}
							className="peer  absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-indigo-500"
						/>
					)}
				</div>

				<div className="mt-2 relative">
					<input
						id="password"
						name="password"
						type={refs}
						required
						placeholder="Enter password"
						minLength={8}
						className="peer block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-9 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
					<KeyIcon className="peer pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-indigo-500" />
				</div>
			</div>
			
			<Button type="submit" className="mt-4 w-full">
				Sign Up <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
			</Button>
			<div
				className="flex h-8 items-end space-x-1"
				aria-live="polite"
				aria-atomic="true"
			>
				{error && (
					<>
						<ExclamationCircleIcon className="h-5 w-5 text-red-500" />
						<p className="text-sm text-red-500">{error}</p>
					</>
				)}
				{success && (
					<>
						<ExclamationCircleIcon className="h-5 w-5 text-green-500" />
						<p className="text-sm text-lime-500">{success}</p>
					</>
				)}
			</div>
		</form>
	);
}
