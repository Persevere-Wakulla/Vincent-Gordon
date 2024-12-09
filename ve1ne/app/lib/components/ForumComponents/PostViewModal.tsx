import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
const PostViewModal = ({ handle }: any) => {
	const [open, setOpen] = useState(true);
	function handleMod() {
		handle();
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

			<div
				className="fixed inset-0 overflow-y-auto px-4 py-4 sm:px-6 sm:py-20 md:py-32 lg:px-8 lg:py-[15vh]"
				onClick={() => handleMod()}
			>
				<DialogPanel
					transition
					className="mx-auto text-sm px-4 text-justify transform-gpu overflow-hidden rounded-lg bg-zinc-50/50 shadow-xl ring-1 ring-zinc-900/7.5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:max-w-xl dark:bg-zinc-700/50 dark:ring-pink-400"
				>
					<div
						role="combobox"
						aria-controls="combobox"
						aria-expanded="false"
						aria-haspopup="listbox"
						aria-labelledby=":r0:-label"
					>
						<div className="text-pink-300">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
							architecto consequuntur eius iste, aut perferendis libero ullam
							magnam illo totam officia aspernatur culpa, ad provident
							exercitationem, consequatur molestiae et accusantium facere ab
							qui. Totam repudiandae doloribus, corrupti cumque enim officia
							natus recusandae inventore ipsa. Dolore, ipsam maiores sunt
							voluptas commodi doloribus! Quasi doloribus eaque, maxime aperiam
							minima enim iusto repellat, voluptates eligendi tempora
							consequuntur mollitia reiciendis nemo eveniet soluta, ex ipsa
							ipsum delectus nisi earum rem dolor ullam reprehenderit eius! Sint
							accusantium quisquam architecto earum error odio non dolores esse
							consequatur voluptatum natus, perspiciatis dolorem ipsam quasi
							tempora, nemo tenetur laudantium amet quae iusto ducimus! Minus
							in, dolore delectus repellendus fuga necessitatibus libero ut,
							voluptates dignissimos dicta unde beatae quasi veniam sint
							blanditiis impedit provident mollitia, earum velit et voluptatibus
							officiis sequi. Molestiae ipsam deleniti qui consequuntur aliquam
							possimus laborum quasi obcaecati? Fuga, magnam, libero ea officia
							unde autem itaque iste architecto hic aperiam animi, at error
							asperiores? Placeat necessitatibus consequatur sunt expedita,
							nostrum tenetur excepturi quam dignissimos officia, molestias
							recusandae velit ab, ipsa nobis assumenda molestiae voluptates
							voluptas beatae modi maxime! Quidem, ipsa fugiat. Adipisci debitis
							perspiciatis nesciunt, autem explicabo numquam facilis non
							consequuntur velit a consectetur voluptatum voluptas alias culpa
							repellat delectus nulla odit sed odio, nihil voluptatem. Quasi
							esse cumque consequatur blanditiis porro eveniet quos quae
							laboriosam nostrum, optio fuga dolores labore rerum dolore animi
							mollitia, magni autem sint libero omnis natus error! Ut aliquam
							consequatur odit nostrum quis qui, debitis dolor hic architecto,
							illo ab impedit suscipit cum magnam iste doloribus sapiente
							facilis, omnis at. Accusamus suscipit totam maiores animi quasi,
							optio beatae, nisi dignissimos placeat ex nulla dolor nostrum
							mollitia enim perferendis. Tempore, repudiandae possimus fugiat
							repellendus natus modi corrupti cum ea, delectus veniam
							consequatur reiciendis earum ducimus libero voluptate perspiciatis
							similique omnis ratione, deleniti numquam? Tempore dolor eveniet
							expedita deserunt quaerat pariatur illo. Sit distinctio tempore
							illo natus officia corrupti unde accusamus deleniti itaque ab
							repudiandae omnis facilis labore veritatis quasi ullam
							necessitatibus nulla laudantium, numquam molestiae vel nam eveniet
							atque. Maiores quasi aliquam sed illo consectetur debitis sint
							dicta mollitia accusantium sunt molestiae repudiandae veniam, sit
							nihil porro impedit, itaque id odit aut ad, magni labore! Deserunt
							debitis, corporis assumenda temporibus itaque neque quae commodi
							aut at et delectus eaque voluptatum iste rerum adipisci
							perspiciatis vitae, esse quas, illum aspernatur sunt ipsam quos!
							Quisquam tempore nesciunt nisi sed itaque, impedit rerum illum
							ratione veniam ipsam nobis eum asperiores, pariatur neque. Illo
							eligendi fugit ipsam hic unde tempora nostrum cum porro neque
							sequi, iure explicabo magnam quod enim saepe similique deleniti?
							Id, accusamus. Cum aperiam nobis fuga eum odio maiores vitae
							minima! Voluptatem totam necessitatibus eaque expedita impedit
							dicta, quaerat, praesentium a, nam molestias ipsa odit nobis at
							possimus deleniti facere repellat eligendi? Enim distinctio
							eligendi magnam deleniti officia, ut ipsum vel quibusdam. Culpa
							iste porro ratione, cumque itaque doloribus excepturi? Itaque
							beatae, eum, quisquam enim sunt doloribus nemo unde quas culpa non
							tempora voluptas fugit labore fuga deleniti cupiditate libero
							vero. Debitis provident natus dignissimos itaque, omnis obcaecati
							cumque commodi officia id nam eligendi doloremque excepturi saepe
							optio ducimus tempore dolore laboriosam reiciendis? Possimus,
							animi enim. Eos, accusamus saepe recusandae culpa vitae, error
							ipsa labore delectus ipsum accusantium sequi. Inventore officia
							labore, itaque adipisci nihil quod laboriosam sunt. Nobis nemo
							nostrum ratione quisquam labore fugit aperiam provident qui
							quibusdam distinctio molestias corrupti ipsum, nisi esse accusamus
							possimus modi iusto! Voluptatem, obcaecati natus, temporibus
							blanditiis quas magnam possimus nisi voluptas eius est corrupti
							quam facere maiores at qui laboriosam! Vero iste possimus minus
							alias perferendis consequatur. Animi nihil iure dolorem minima
							accusantium magnam iusto cum assumenda alias corporis quas,
							possimus facere magni sint vel ex eos soluta incidunt voluptate,
							ipsam delectus! Eos, labore? Provident placeat, repudiandae est
							praesentium quidem optio impedit sint eaque. Doloremque asperiores
							molestiae ipsum consequatur mollitia at nam vero accusamus aliquam
							dicta cumque unde maxime rerum nulla obcaecati, pariatur sapiente
							tempore repellendus nemo ut corporis sit dolores ad. Cumque odit
							quaerat deserunt, cupiditate porro ratione inventore dignissimos
							omnis qui ipsa sit veritatis consectetur corrupti voluptatem fuga.
							Magnam deserunt illo, incidunt mollitia sequi architecto quisquam
							veniam ratione aperiam, accusantium reprehenderit consequatur.
							Voluptatibus sed, inventore quae expedita vel iusto veniam quasi
							obcaecati iste tempora cupiditate aperiam illum. Fuga tempore
							aliquid ab temporibus facilis! Obcaecati sequi sit vel provident,
							unde reiciendis nisi voluptates, odit laboriosam optio dolorum
							illo a iusto voluptatum dolore, facilis asperiores non accusantium
							totam! Quae mollitia sunt quod debitis natus perferendis
							cupiditate necessitatibus animi dolorum? Consectetur veritatis
							recusandae magnam nam laudantium necessitatibus, quasi velit
							delectus aliquid aperiam earum voluptate dolore cumque blanditiis
							natus qui doloribus esse? Fuga aliquam explicabo quaerat unde in
							molestias esse est ad sapiente similique nisi repellendus
							necessitatibus eveniet, harum voluptatem quas consequatur rem.
							Eligendi a dolor quia natus, id quis veritatis quae magni iste
							esse aperiam quasi architecto, quaerat recusandae sequi, corrupti
							assumenda illo hic illum maiores non doloremque modi vero et!
							Incidunt, necessitatibus voluptatem mollitia numquam ea sunt
							laborum magnam eius aliquid quibusdam voluptate, dolor error
							eaque? Quia, totam laboriosam non impedit voluptatibus officiis
							numquam perferendis, ea corrupti, dicta architecto. Earum iusto
							adipisci dolor magni deleniti fugiat modi ipsum error sed! Veniam
							assumenda tempora accusantium iure quia dolore ex. Veniam vero id
							officia, earum illum rem sit et fugit hic modi esse sequi
							necessitatibus deleniti iste architecto quisquam magni assumenda
							possimus distinctio consequatur unde. Cupiditate, atque ab iure
							beatae ullam et tempore officia soluta earum esse minus
							consectetur reprehenderit maxime accusantium quaerat perspiciatis
							dolores iusto alias pariatur repellendus tenetur animi voluptas.
							Consequatur itaque hic saepe rem et reprehenderit sunt quisquam
							optio. Saepe maxime maiores unde, ducimus alias magni quisquam
							recusandae iusto quo quos eaque quibusdam nostrum eveniet qui est
							culpa mollitia blanditiis tenetur vel quidem perferendis voluptas
							rem, porro commodi! Explicabo nemo distinctio, tenetur at quod
							natus libero aliquam necessitatibus aut quo, magni quia non
							aspernatur. Error temporibus voluptate, quasi blanditiis
							exercitationem eveniet accusantium ratione nisi, fugit fuga,
							adipisci nemo eaque similique beatae vitae minima pariatur esse
							reprehenderit laboriosam veritatis voluptates. In nihil eius
							dolorem. Assumenda!
						</div>
					</div>
				</DialogPanel>
			</div>
		</Dialog>
	);
};

export default PostViewModal;
