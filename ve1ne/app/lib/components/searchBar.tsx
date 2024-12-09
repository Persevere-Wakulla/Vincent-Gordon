"use-client";
import { useEffect, useState } from "react";
import SearchModal from "./searchModal";
const SearchBar = () => {
	const [inputSearchOpen, setInputSearchOpen] = useState(false);
	function handleModal(){ 
		setInputSearchOpen(false)
	}
	return (
		<>
			<div className="hidden pr-9 lg:block lg:max-w-md lg:flex-1">
				<button
					onClick={() => setInputSearchOpen((c) => !c)}
					type="button"
					className="hidden h-8 w-[16rem] items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-yellow-400 ui-not-focus-visible:outline-none lg:flex dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-yellow-400/30"
				>
					<svg
						viewBox="0 0 20 20"
						fill="none"
						aria-hidden="true"
						className="h-5 w-5 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
						></path>
					</svg>
					Search...
					<kbd className="ml-auto text-2xs text-zinc-400 dark:text-zinc-500">
						<kbd className="font-sans">Ctrl </kbd>
						<kbd className="font-sans">K</kbd>
					</kbd>
				</button>

				<div
					hidden
					style={{
						position: "fixed",
						top: "1px",
						left: "1px",
						width: "1px",
						height: "0px",
						padding: "0px",
						margin: "-1px",
						overflow: "hidden",
						clip: "rect(0px, 0px, 0px, 0px)",
						whiteSpace: "nowrap",
						borderWidth: "0px",
						display: "none",
					}}
				></div>
			</div>
			{inputSearchOpen ? <SearchModal handle={handleModal} /> : null}
		</>
	);
};

export default SearchBar;
