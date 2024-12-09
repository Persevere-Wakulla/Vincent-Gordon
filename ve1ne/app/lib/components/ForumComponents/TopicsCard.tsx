import {
	ArrowUpOnSquareIcon,
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
const TopicsCard = () => {
	const [showControls, setShowControls] = useState(false);
	return (
		<section className="border border-pink-300 px-2">
			<fieldset>
				<div className=" text-pink-200 flex items-center justify-between">
					<h1>New Topic</h1>
					{showControls && <div className="flex items-center ">
						<ChevronDoubleLeftIcon className="text-pink-600 size-4 ml-auto active:scale-+1 " />
						<ChevronDoubleRightIcon className="text-pink-600 size-4 ml-auto active:scale-+1 " />
					</div>}
				</div>

				<div className="border border-pink-200"></div>
				<ArrowUpOnSquareIcon onClick={() => setShowControls(c=>!c)} className="text-pink-600 size-6 ml-auto active:scale-+1 " />
			</fieldset>
		</section>
	);
};

export default TopicsCard;
