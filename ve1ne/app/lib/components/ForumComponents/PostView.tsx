import Image from "next/image";
import LocalTimeDisplay from "../../utils/CustomHooks";
import { useState } from "react";
import PostViewModal from "./PostViewModal";
const PostView = () => {
	const [expand, setExpand] = useState(false);
    function handleModal(){
        setExpand(false)
    }
	return (
        <>
		<section
			onClick={() => setExpand((c) => !c)}
			className="border border-pink-300 px-4 cursor-pointer"
		>
			<div>
				<div className="flex items-center gap-1 mt-3 justify-between">
					<div className="text-pink-500">
						<strong>Topic:</strong>{" "}
						<div className="ml-5">
							<em>FrameWorks and their Libraries</em>
						</div>
					</div>
					<div className="flex items-center gap-2 ">
						<Image
							src="/TcDivision.png"
							alt=""
							width={90}
							height={10}
							className="inline-block size-12 rounded-full ring-2 ring-pink-400 mr-1"
						/>

						<div>
							<em className="text-pink-500">
								<LocalTimeDisplay date={new Date()} />
							</em>
						</div>
					</div>
				</div>
			</div>
			<div className="text-pink-500">
				Subject:
				<div className="ml-5">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos esse
					exercitationem consequuntur expedita ipsa voluptatibus dolorum maiores
					accusantium temporibus nulla.
				</div>
			</div>
        </section>
            {expand ? <PostViewModal handle={handleModal} />:null}
        </>
    
	)
};

export default PostView;
