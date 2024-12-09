"use-client"
import Link from "next/link";
import Image from "next/image";
import HeaderImage from "@/lib/components/HeaderImage";
import LoginForm from "@/app/lib/components/RegisterComponent/login-form";

const Page = () => {
	return (
		<>
			<HeaderImage />

			<section className="flex w-[600px] mx-auto min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h3 className="bg-fenix bg-no-repeat bg-center  text-center text-4xl font-bold p-10 rounded-lg font-serif leading-9 tracking-tight text-indigo-700">
						Ve1ne
					</h3>
					<h2 className="mt-2 text-center text-2xl font-bold font-serif leading-9 tracking-tight text-gray-200">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"></div>
				<LoginForm />
				<hr />
				<p className="mt-10 text-center text-sm text-gray-300">
					Don't have an account?{" "}
					<Link
						href="/signup"
						className="font-semibold text-indigo-600 hover:text-indigo-500"
					>
						Sign up
					</Link>
				</p>
			</section>
			<footer className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-center">
				<p>
					Created by <a href="/#">Vincent M G Delemos</a>
				</p>
				<p>
					Part of <a href="/#">My Capstone</a>
				</p>
				<p>
					Authentication powered by <a href="/#">Passport</a>
				</p>
			</footer>
		</>
	);
};

export default Page;
