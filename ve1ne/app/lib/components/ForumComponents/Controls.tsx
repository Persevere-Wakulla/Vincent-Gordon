import {
	HandThumbUpIcon,
	ShareIcon,
	ChatBubbleBottomCenterTextIcon,
	FlagIcon,
	PencilIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/outline";
import useStateStore from "@/lib/StateStore/Store";
import { initialState } from "@/lib/StateStore/Store";
const Controls = () => {
	const [store, setStore] = useStateStore(initialState);
	return (
		<section className="flex justify-between px-2 border border-pink-200">
			<button>
				{initialState.userInfo.preference.readRelpiesStart && initialState.threadBeingViewed.currentReplyPage == 0 ? null : (
					<ChevronLeftIcon className="text-pink-600 size-4 ml-auto active:scale-+1 " />
				)}
			</button>
			<button className="flex gap-1">
				<HandThumbUpIcon className="text-pink-400 size-4 ml-auto active:scale-+1 " />
				<span className="text-xs text-pink-200 ">8000</span>
			</button>
			<button className="flex gap-1">
				<ShareIcon className="text-pink-400 size-4 ml-auto active:scale-+1 " />
				<span className="text-xs text-pink-200">8000</span>

			</button>
			<button className="flex gap-1">
				<ChatBubbleBottomCenterTextIcon className="text-pink-400 size-4 ml-auto active:scale-+1 " />
				<span className="text-xs text-pink-200">8000</span>

			</button>
			<button>
				{initialState.schema.owner ? (
					<PencilIcon className="text-pink-500 size-4 ml-auto active:scale-+1 " />
				) : (
					<FlagIcon className="text-pink-500 size-6 ml-auto active:scale-+1 " />
				)}
			</button>
			<button>
				{initialState.userInfo.preference.readRelpiesStart ? (
					<ChevronRightIcon className="text-pink-600 size-4 ml-auto active:scale-+1 " />
				) : null}
			</button>
			
		</section>
	);
};

export default Controls;
