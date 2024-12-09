import React from "react";
import ReactDOM from "react-dom/client";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import "./stylz.css";

// Pages
import About from "./components/React-6.4/Pages/about";
import Home from "./components/React-6.4/Pages/home";
import Faq from "./components/React-6.4/HelpSection/Faq";
import Contact, { contactAction } from "./components/React-6.4/HelpSection/Contact";
import NotFound from "./components/React-6.4/Pages/NotFound";
import CareerError from "./components/React-6.4/Pages/Careers/CareerError";
// Loaders
import Careers, { getData } from "./components/React-6.4/Pages/Careers/careers";
import CareerDetails, { careerDetailsLoader } from "./components/React-6.4/Pages/Careers/CareerDetails";
// Layouts
import RootLayout from "./components/React-6.4/Layouts/RootLayout";
import HelpLayout from "./components/React-6.4/Layouts/HelpLayout";
import CareerLayout from "./components/React-6.4/Layouts/CareerLayout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="help" element={<HelpLayout />}>
				<Route path="faq" element={<Faq />} />
				<Route path="contact" element={<Contact />} action={contactAction}/>
			</Route>
			<Route path="career" errorElement={<CareerError />} element={<CareerLayout />}>
				<Route index
				 element={<Careers />}
				  loader={getData} 
				  />
				  <Route 
				  path=":id"
				  element={<CareerDetails />}
				  loader={careerDetailsLoader}
				  
				  />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
