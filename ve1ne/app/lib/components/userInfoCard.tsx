import Image from "next/image";
import {
	LinkIcon,
	GlobeAltIcon,
	ChevronDownIcon,
	ArrowUpTrayIcon
} from "@heroicons/react/24/outline";
import SingleRingAnimaton from "./singleRingAnimaton";
const UserInfoCard = () => {
	return (
		<div className="Dialog w-60  border border-slate-500/50 relative ">
			<div className="flex flex-col gap-4 p-6 justify-center items-center">
			<SingleRingAnimaton />
				<Image
					src="/TcDivision.png"
					alt=""
					width={90}
					height={10}
					className="inline-block size-32 rounded-full ring-2 ring-yellow-400"
				/>
				<div className="text-center">
					<p className="text-lg font-bold">Vincent M G Delemos</p>
					<p className="text-gray-600">FullStack Jr. Dev</p>
					<p className="text-gray-400 text-sm">Tampa Florida</p>
				</div>
				<div className="flex flex-col gap-2">
					<button className=" bg-yellow-400 px-8 py-0.5 text-white text-sm rounded-full w-[8rem]">
						Follow
					</button>
					<button className="border border-yellow-400 px-4 py-0.5 text-yellow-400 text-sm rounded-full w-[8rem]">
						Connect{" "}
						<span>
							<ChevronDownIcon className="size-3 inline-block" />
						</span>
					</button>
				</div>
			</div>
			<div className="border-y border-slate-500/50 flex">
				<div className="flex flex-col justify-center items-center p-3 pe-6 border-e border-slate-500/50">
					<p>500</p>
					<p className="text-sm text-gray-400" >connections</p>
				</div>
				<div className="flex flex-col justify-center items-center p-3 mx-6 ">
					<p>2.9m</p>
					<p className="text-sm text-gray-400">followers</p>
				</div>
			</div>
			<section className="border-b border-slate-500/50 p-3 pb-5 my-2">
				<div className="flex gap-1 items-center">
					<LinkIcon className="pointer-events-none  text-gray-400 size-4" />
					<a href="/#" className="text-gray-400">
						linkedin.com/in/vimogode
					</a>
				</div>
				<div className="flex gap-1 items-center">
					<GlobeAltIcon className="size-4 pointer-events-none text-gray-400 " />
					<a href="/#" className="text-gray-400">vimogode.com</a>
				</div>
			</section>
			<div className="flex items-center gap-1 p-3 border-b-1 pb-5 border-slate-500/50 justify-center">
				<ArrowUpTrayIcon 
				className="size-4 text-gray-400"/>
				<p className="text-gray-400 text-sm">
				 Export page as PDF
				</p>
			</div>
		</div>
	);
};

export default UserInfoCard;
