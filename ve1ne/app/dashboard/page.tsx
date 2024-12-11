"use client"
import { useState } from "react";

import HeaderImage from "@/lib/components/HeaderImage";
import Footer from "@/components/footer";
import UserInfoCard from "@/lib/components/userInfoCard";
import Usertabs from "@/lib/components/usertabs";
import Portal from "@/lib/components/portal";
import TopicsCard from "../lib/components/ForumComponents/TopicsCard";
import Controls from "../lib/components/ForumComponents/Controls";
import MainHeader from "../lib/components/MainHeader";
import PostForm from "../lib/components/ForumComponents/PostForm";
import PostReply from "../lib/components/ForumComponents/ReplyView";
import PostView from "../lib/components/ForumComponents/PostView";
import RelativeForm from "../lib/components/ForumComponents/RelativeForm";


const navigation = [
	{ name: "Dashboard", href: "#" },
	{ name: "Hot Threads", href: "#" },
	{ name: "Profile", href: "#" },
	{ name: "Settings", href: "#" },
];
export default function Home() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


	return (
		<main className=" overflow-hidden h-screen">
			<HeaderImage />
			<Usertabs
				subPage={["Posts", "Interests", "Recommended", "Following", "Groups"]}
			/>

			<MainHeader />
			<div className="min-h-screen p-4">
				<div className="grid grid-cols-[1fr_2fr_1fr] md:grid-cols-3 gap-4 h-[80vh]">
					<div className="col-span-1">
						<UserInfoCard />
					</div>
					<div className="col-span-1 relative">
						<div className="relative z-0">
							<Portal />
							<div className="relative z-10">
								<TopicsCard />
								<Controls />
								<PostForm />
								<PostReply />
								<PostView />
								<RelativeForm />
							</div>
						</div>
					</div>
					<div className="col-span-1">{/* <AdditionalContent /> */}</div>
				</div>
			</div>
			<Footer />

			<div
				aria-hidden="true"
				className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
			>
				<div
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
					className="relative left-[calc(50%+3rem)] aspect-[1200/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
				/>
			</div>
		</main>
	);
}
