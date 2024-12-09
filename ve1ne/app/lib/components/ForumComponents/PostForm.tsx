import useFormReset from "@/lib/utils/CustomHooks"
const PostForm = () => {

	


	return (
		<section>
			<form  className="border border-pink-400 px-4">
				<div>
					<div className="flex flex-col">
						<label htmlFor="topic"className="text-pink-500 cursor-pointer" >Topic</label>
						<input
                        id="topic"
					
							type="text"
							placeholder="What's on your mind???"
							className="bg-transparent text-pink-300  cursor-pointer focus-ring  shadow-sm ring-1 ring-inset ring-pink-400 placeholder:text-pink-300 pl-9 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="subject" className="text-pink-500">Subject</label>
						<input
						   id="subject"
					
						  
							type="text"
							placeholder="How Do You Feel??"
							className="bg-transparent text-pink-300  cursor-pointer focus-ring  shadow-sm ring-1 ring-inset ring-pink-400 placeholder:text-pink-300 pl-9 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="tags" className="text-pink-500">#Tags</label>
						<input
						   id="tags"
						 
							type="text"
							placeholder="Hashtags..."
							className="bg-transparent text-pink-300  cursor-pointer focus-ring  shadow-sm ring-1 ring-inset ring-pink-400 placeholder:text-pink-300 pl-9 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div className="flex justify-between mt-5 mb-5">
					<button className=" bg-pink-400 px-8 py-0.5 text-white text-sm rounded-full w-[8rem] hover:border-pink-400 hover:text-pink-400 hover:border hover:bg-transparent">Post</button>
					<button className="border border-pink-400 px-4 py-0.5 text-pink-400 text-sm rounded-full w-[8rem] hover:bg-pink-400 hover:text-white ">Cancel</button>
				</div>
			</form>
		</section>
	);
};

export default PostForm;
