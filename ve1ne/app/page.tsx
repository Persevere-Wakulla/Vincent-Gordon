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

// export default function Home() {
// 	return (
// 		<main className="flex min-h-screen flex-col items-center justify-between p-24">
// 			<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
// 				<div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
// 				<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
// 					Get started by editing&nbsp;
// 					<code className="font-mono font-bold">app/page.js</code>
// 				</p>
// 				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
// 					<a
// 						className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
// 						href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 					>
// 						By{" "}
// 						<Image
// 							src="/vercel.svg"
// 							alt="Vercel Logo"
// 							className="dark:invert"
// 							width={100}
// 							height={24}
// 							priority
// 						/>
// 					</a>
// 				</div>
// 			</div>

// 			<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
// 				<Image
// 					className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
// 					src="/next.svg"
// 					alt="Next.js Logo"
// 					width={180}
// 					height={37}
// 					priority
// 				/>
// 			</div>

// 			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
// 				<a
// 					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// 					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					<h2 className={`mb-3 text-2xl font-semibold`}>
// 						Docs{" "}
// 						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// 							-&gt;
// 						</span>
// 					</h2>
// 					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// 						Find in-depth information about Next.js features and API.
// 					</p>
// 				</a>

// 				<a
// 					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// 					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					<h2 className={`mb-3 text-2xl font-semibold`}>
// 						Learn{" "}
// 						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// 							-&gt;
// 						</span>
// 					</h2>
// 					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// 						Learn about Next.js in an interactive course with&nbsp;quizzes!
// 					</p>
// 				</a>

// 				<a
// 					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// 					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					<h2 className={`mb-3 text-2xl font-semibold`}>
// 						Templates{" "}
// 						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// 							-&gt;
// 						</span>
// 					</h2>
// 					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// 						Explore starter templates for Next.js.
// 					</p>
// 				</a>

// 				<a
// 					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// 					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					<h2 className={`mb-3 text-2xl font-semibold`}>
// 						Deploy{" "}
// 						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// 							-&gt;
// 						</span>
// 					</h2>
// 					<p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
// 						Instantly deploy your Next.js site to a shareable URL with Vercel.
// 					</p>
// 				</a>
// 			</div>
// 		</main>
// 	);
// }
