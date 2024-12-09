import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
	useLoaderData,
} from "react-router-dom";
// import { SnackbarProvider } from "notistack";

// Pages
import Home from "./Routes/Pages/Home";
import Profile from "./Routes/Pages/Profile";

// Layouts
import RootLayout from "./Layouts/RootLayout";
import CategoriesLayout from "./Layouts/CategoriesLayout";
import MainLayout from "./Layouts/MainLayout";
import GeneralLayout from "./Layouts/GeneralLayout";
import SupportLayout from "./Layouts/SupportLayout";
import SearchLayout from "./Layouts/SearchLayout";
import ShoppingCartLayout from "./Layouts/ShoppingCartLayout";
import ForumLayout from "./Layouts/ForumLayout";

// Loaders
import {
	detailsLoader,
	fetchLoader,
	productLoader,
	useLocalStorage,
} from "./Utils/fetching";

//Routes
import ContactUs, { contactAction } from "./Routes/Pages/ContactUs";
import Landing from "./Routes/Landing";
import SignUp from "./Routes/SignUp";
import Faq from "./Routes/Pages/Faq";
import Coupons from "./Routes/Pages/Coupons";
import Products from "./Routes/NestedRoutes/Products";
import General from "./Routes/NestedRoutes/General";
import PageNotFound from "./Error/PageNotFound";
import ProductCard from "./components/ProductCard";
import ErrorElement from "./Error/ErrorElement";

// Forum
import ForumHome from "./Forum/ForumHome";
import ForumLogin from "./Forum/ForumLogin";
import ForumNav from "./Forum/ForumNav";
import ForumRegister from "./Forum/ForumRegister";
import ForumReplies from "./Forum/ForumReplies";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" errorElement={<ErrorElement />} element={<RootLayout />}>
			<Route index element={<Landing />} />
			<Route
				path="signup"
				// loader={useLocalStorage}
				element={<SignUp />}
			/>
			<Route path="main" element={<MainLayout />}>
				<Route path="search" element={<SearchLayout />}>
					<Route index element={<Products />} loader={productLoader} />
					<Route path=":id" element={<ProductCard />} loader={detailsLoader} />
				</Route>
				<Route index element={<Home />} />
				<Route path="forum" element={<ForumLayout />}>
					<Route path="login" element={<ForumLogin />} />
					<Route path="register" element={<ForumRegister />} />
					<Route path="dashboard" element={<ForumHome />} />
					<Route path=":id/replies" element={<ForumReplies />} />
				</Route>
				<Route
					path="categories"
					element={<CategoriesLayout />}
					errorElement={<ErrorElement />}
				>
					<Route path="electronics" element={<GeneralLayout />}>
						<Route
							index
							element={<General />}
							loader={() => fetchLoader("tablets")}
						/>
						<Route
							path=":id"
							element={<ProductCard />}
							loader={detailsLoader}
						/>
					</Route>
					<Route path="jewelery" element={<GeneralLayout />}>
						<Route
							index
							element={<General />}
							loader={() => fetchLoader("womens-jewellery")}
						/>
						<Route
							path=":id"
							element={<ProductCard />}
							loader={detailsLoader}
						/>
					</Route>
					<Route path="watches" element={<GeneralLayout />}>
						<Route
							index
							element={<General />}
							loader={() => fetchLoader("mens-watches")}
						/>
						<Route
							path=":id"
							element={<ProductCard />}
							loader={detailsLoader}
						/>
					</Route>
					<Route path="motorcycles" element={<GeneralLayout />}>
						<Route
							index
							element={<General />}
							loader={() => fetchLoader("motorcycle")}
						/>
						<Route
							path=":id"
							element={<ProductCard />}
							loader={detailsLoader}
						/>
					</Route>
				</Route>

				<Route path="profile" element={<Profile />} />
				<Route path="support" element={<SupportLayout />}>
					<Route
						path="contactus"
						element={<ContactUs />}
						action={contactAction}
					/>
					<Route path="faq" element={<Faq />} />
					<Route path="coupons" element={<Coupons />} />
				</Route>
				<Route path="cart" element={<ShoppingCartLayout />} />
			</Route>
			<Route path="*" element={<PageNotFound />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	
		<RouterProvider router={router} />
);
