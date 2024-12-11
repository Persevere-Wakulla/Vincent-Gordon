"use client";
import { authenticate } from "@/actions/actions";

import Link from "next/link";
import {
	AtSymbolIcon,
	KeyIcon,
	ExclamationCircleIcon,
	UserCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "@/lib/components/RegisterComponent/button";
import { useActionState } from "react";



export default function LoginForm() {
	const [errorMessage, formAction, isPending] = useActionState(
		authenticate,
		undefined
	);

	return (
		<form action={formAction} className="space-y-6">
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
				<div className="flex items-center justify-between">
					<label
						htmlFor="current-password"
						className="block text-sm font-medium leading-6 text-gray-100"
					>
						Password
					</label>
					<div className="text-sm ">
						<Link
							href="/#"
							className="font-semibold text-indigo-600 hover:text-indigo-500"
						>
							Forgot Password?
						</Link>
					</div>
				</div>
				<div className="mt-2 relative">
					<input
						id="current-password"
						name="password"
						type="password"
						autoComplete="current-password"
						required
						placeholder="Enter password"
						minLength={8}
						className="peer block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-9 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
					<KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-indigo-500" />
				</div>
			</div>
			<button type="submit" className="flex w-full justify-center mt-10 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={isPending}>
				Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
			</button>
			<div
				className="flex h-8 items-end space-x-1"
				aria-live="polite"
				aria-atomic="true"
			>
				{errorMessage && (
					<>
						<ExclamationCircleIcon className="h-5 w-5 text-red-500" />
						<p className="text-sm text-red-500">{errorMessage}</p>
					</>
				)}
			</div>
		</form>
	);
}
