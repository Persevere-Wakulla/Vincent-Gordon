import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const SearchModal = ({handle}:any) => {
	const [open, setOpen] = useState(true);
function handleMod(){
	handle()
}
	return (
		<Dialog
			onClose={setOpen}
			open={open}
			className="fixed inset-0 z-50 lg:block"
				
		>
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-zinc-400/25 backdrop-blur-sm  data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/40"
			
			/>

			<div className="fixed inset-0 overflow-y-auto px-4 py-4 sm:px-6 sm:py-20 md:py-32 lg:px-8 lg:py-[15vh]" onClick={()=> handleMod()}>
				<DialogPanel 
				transition className="mx-auto transform-gpu overflow-hidden rounded-lg bg-zinc-50 shadow-xl ring-1 ring-zinc-900/7.5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:max-w-xl dark:bg-zinc-900 dark:ring-zinc-800">
					<div
						role="combobox"
						aria-controls="combobox"
						aria-expanded="false"
						aria-haspopup="listbox"
						aria-labelledby=":r0:-label"
					>
						<form action="" noValidate role="search">
							<div className="group relative flex h-12">
								<svg
									viewBox="0 0 20 20"
									fill="none"
									className="pointer-events-none absolute left-3 top-0 h-full w-5 stroke-yellow-400"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
									></path>
								</svg>
								<input
									data-autofocus="true"
									className="flex-auto appearance-none bg-transparent pl-10 text-zinc-900 outline-none placeholder:text-yellow-400 focus:w-full focus:flex-none sm:text-sm focus:border focus:border-yellow-400 dark:text-white [&amp;::-webkit-search-cancel-button]:hidden [&amp;::-webkit-search-decoration]:hidden [&amp;::-webkit-search-results-button]:hidden [&amp;::-webkit-search-results-decoration]:hidden pr-4"
									aria-autocomplete="both"
									aria-labelledby=":r0:-label"
									id=":r0:-input"
									autoComplete="off"
									autoCorrect="off"
									autoCapitalize="off"
									enterKeyHint="search"
									spellCheck="false"
									placeholder="Find something..."
									maxLength={512}
									type="search"
									value=""
								/>
							</div>
							<div className="border-t border-zinc-200 bg-white empty:hidden dark:border-zinc-100/5 dark:bg-white/2.5"></div>
						</form>
					</div>
				</DialogPanel>
			</div>
		</Dialog>
	);
};

export default SearchModal;
