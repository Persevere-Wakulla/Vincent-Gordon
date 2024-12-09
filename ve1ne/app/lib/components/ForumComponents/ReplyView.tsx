import Image from "next/image";
import LocalTimeDisplay from "@/lib/utils/CustomHooks";
import {
	HandThumbUpIcon,
	ShareIcon,
	ChatBubbleBottomCenterTextIcon,
	FlagIcon,
	PencilIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { initialState } from "../../StateStore/Store";
const PostReply = () => {
	return (
		<section className="border border-pink-400 px-4">
			<div className="flex items-center gap-1 mt-3">
				<Image
					src="/TcDivision.png"
					alt=""
					width={90}
					height={10}
					className="inline-block size-12 rounded-full ring-2 ring-pink-400 mr-1"
				/>
				<div className="text-pink-500">
					vimogode{" "}
					<span>
						<strong>posted:</strong>
					</span>
				</div>
				<div>
					<em className="text-pink-500">
						<LocalTimeDisplay date={new Date()} />
					</em>
				</div>
			</div>
			<div className="mt-3 text-pink-500" >Commented:
				<div className="border border-pink-300 text-pink-500 px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum magni vero? Mollitia nam in sunt? Similique harum, tempora, fugit deleniti aliquid eius iure, ut optio quam pariatur numquam nulla.
                </div>
			</div>
            <div className="flex justify-between px-1 mt-3 mb-3">
			
			<button className="flex gap-1">
				<HandThumbUpIcon className="text-pink-400 size-4 ml-auto active:scale-+1 " />
				<span className="text-xs text-pink-300 ">8000</span>
			</button>
			<button className="flex gap-1">
				<ShareIcon className="text-pink-400 size-4 ml-auto active:scale-+1 " />
				<span className="text-xs text-pink-300">8000</span>

			</button>
			<button className="flex gap-1">
				<ChatBubbleBottomCenterTextIcon className="text-pink-400 size-4 ml-auto active:scale-+1 " />
				<span className="text-xs text-pink-300">8000</span>

			</button>
			<button>
				{initialState.schema.owner ? (
					<PencilIcon className="text-pink-500 size-4 ml-auto active:scale-+1 " />
				) : (
					<FlagIcon className="text-pink-500 size-6 ml-auto active:scale-+1 " />
				)}
			</button>
			
		</div>
		</section>
	);
};

export default PostReply;
