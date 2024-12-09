import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
	Bars3Icon,
	XMarkIcon,
	BellAlertIcon,
	UserIcon,
	EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import HeaderImage from "@/lib/components/HeaderImage";
import Footer from "@/components/footer";
import UserInfoCard from "@/lib/components/userInfoCard";
import Usertabs from "@/lib/components/usertabs";
import Portal from "@/lib/components/portal";
import SearchBar from "@/lib/components/searchBar";
import SignOutButton from "@/components/RegisterComponent/SignOutBtn";
import TopicsCard from "@/components/ForumComponents/TopicsCard";
import Controls from "@/components/ForumComponents/Controls";
import Link from "next/link";
import DashMobileMenu from "./DashMobileMenu";

const navigation = [
	{ name: "Dashboard", href: "/dashboard" },
	{ name: "Hot Threads", href: "/dashboard/hotthreads" },
	{ name: "Profile", href: "/dashboard/profile" },
	{ name: "Support", href: "/dashboard/support" },
];
const MainHeader = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<header className="absolute mx-auto max-w-[100rem] px-4 sm:px-6 xl:px-8 inset-x-0 top-0 z-50  py-4 ">
				<nav
					aria-label="Global"
					className="flex items-center justify-between p-6 xl:px-8"
				>
					<div className="flex lg:flex-1 lg:justify-center lg:items-center">
						<a href="/#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<Image
								alt="fenix"
								src="/phenix.png"
								className=" rounded-lg"
								width={50}
								height={50}
							/>
						</a>
					</div>

					<SearchBar />

					<div className="flex lg:hidden">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(true)}
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon aria-hidden="true" className="size-6" />
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-sm/6 font-semibold text-gray-500"
							>
								{item.name}
							</Link>
						))}
					</div>
					<div className="md:hidden lg: mx-auto hidden lg:flex flex-auto  justify-center gap-8 items-center relative w-2">
						<EnvelopeIcon className="size-6 text-lime-400" />
						<BellAlertIcon className="size-6 text-pink-400" />
						<UserIcon className="size-6 text-yellow-300" />
					</div>
					<div className="lg:flex lg:flex-auto md:hidden hidden lg:justify-center gap-4 lg:items-center relative w-0 ">
						<div className="absolute right-[5.42rem] top-[1.92rem] -translate-x-[3.4rem] -translate-y-[2rem] ">
							<svg
								viewBox="0 0 558 558 "
								width="50"
								height="50"
								fill="none"
								aria-hidden="true"
								className="animate-spin-slower size-12 "
							>
								<defs>
									<linearGradient
										id=":S3:"
										x1="79"
										y1="16"
										x2="105"
										y2="237"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#f90"></stop>
										<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
									</linearGradient>
								</defs>
								<path
									opacity=".8"
									d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
									stroke="#fff"
									strokeWidth="3"
								></path>
								<path
									d="M1 279C1 125.465 125.465 1 279 1"
									stroke="url(#:S3:)"
									strokeWidth="16"
									strokeLinecap="round"
								></path>
							</svg>
						</div>
						<Image
							alt="The Division"
							src="/TcDivision.png"
							className="inline-block size-12 rounded-full"
							width={100}
							height={100}
						/>
						<SignOutButton />
					</div>
				</nav>
				<Dialog
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
					className="lg:hidden relative"
				>
					<div className="fixed inset-0 z-50" />
					<DialogPanel className="fixed Dialog inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
						<div className="flex items-center justify-between">
							<a href="/#" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								
								<Image
									alt="fenix"
									src="/phenix.png"
									className=" rounded-lg"
									width={50}
									height={50}
								/>
							</a>
                            <div className="lg:hidden sm:mx-auto sm:flex flex-auto  justify-center gap-8 items-center relative w-2">
									<EnvelopeIcon className="size-6 text-lime-400" />
									<BellAlertIcon className="size-6 text-pink-400" />
									<UserIcon className="size-6 text-yellow-300" />
								</div>
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon aria-hidden="true" className="size-6" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{navigation.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-500 hover:bg-gray-800"
										>
											{item.name}
										</Link>
									))}
								</div>
							<DashMobileMenu />
								<div className="py-6">
									<a
										href="/#"
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-500 hover:bg-gray-800"
									>
										Log in
									</a>
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</header>
			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div
					aria-hidden="true"
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				>
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="relative left-[calc(50%-11rem)] aspect-[1080/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					/>
				</div>
			</div>
		</>
	);
};

export default MainHeader;
