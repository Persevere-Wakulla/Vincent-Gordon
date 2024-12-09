import Image from "next/image";


const RelativeForm = () => {
	return (
		<section  className="border border-pink-400 px-4">
			<div className="text-pink-700 flex gap-1 mt-2 mb-1">
				Original <strong>Topic:</strong> <em>Frameworks and Libraries</em>
				<span>
					<strong>ID:</strong> <em>SADh224563</em>
				</span>
			</div>
			<div className="text-pink-600 flex gap-1 ml-4 mb-1">
				Continued AS <strong>Topic:</strong> <em>Frameworks or Libraries</em>
			</div>
			<div className="text-pink-500 flex gap-1 ml-8 mb-2">
               <em><strong>Subject:</strong></em>
            </div>
            <input 
			type="text" 
			placeholder="Whats New??"
			className="bg-transparent text-pink-300  cursor-pointer focus-ring ml-12 mb-4 shadow-sm ring-1 ring-inset ring-pink-400 placeholder:text-pink-300 pl-9 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6"/>

		</section>
	);
};

export default RelativeForm;
