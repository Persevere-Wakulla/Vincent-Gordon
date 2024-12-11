import Link from "next/link";
import HeaderImage from "@/lib/components/HeaderImage";

export default function Page() {
	return (
		<>
			<HeaderImage />
			<section className="flex w-[600px] mx-auto min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<h3 className="mt-10 text-center text-4xl font-bold font-serif leading-9 tracking-tight text-gray-400">Welcome To Ve1ne</h3>
				<h1 className="mt-4 text-center text-2xl font-bold font-serif leading-9 tracking-tight text-gray-400">Sign up</h1>
				<p className="mt-6 text-center text-xl font-bold font-serif leading-9 tracking-tight text-gray-400">
					Already have an account?</p>
					 <Link href="/login" className="flex w-20
					 mx-auto justify-center mt-10 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</Link>
				
			</section>
			<footer className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-center">
				<p>
					Created by <a href="/#">Vincent M G Delemos</a>
				</p>
				<p>
					Part of <a href="/#">My Capstone</a>
				</p>
				<p>
					Authentication powered by{" "}
					<a href="https://www.passportjs.org">Passport</a>
				</p>
			</footer>
		</>
	);
}

