import {React,useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,
	Route,
	NavLink,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom'
import './stylz.css'

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import PageNotFound from "./components/PageNotFound";
import Faq from "./Pages/Faq";
import Contact, { contactAction } from "./Pages/Contact";
import Careers, { careersLoader } from "./Pages/Careers";
import ErrorComponent from "./components/ErrorComponent";
// Loader
import CareersDetails, { careerDetailsLoader } from "./components/CareersDetails";
// Layouts
import RootLayout from "./Layout/RootLayout";
import HelpLayout from "./Layout/HelpLayout";
import CareerLayout from "./Layout/CareerLayout";



const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />}/>
			<Route path='about' element={<About />}/>
			<Route path="help" element={<HelpLayout />}>
				<Route path="faq" element={<Faq/>}/>
				<Route path="contact" action={contactAction} element={<Contact/>}/>
			</Route>
			<Route path="careers" errorElement={<ErrorComponent/>} element={<CareerLayout />}>
				<Route index 
				element={<Careers />}
				loader={careersLoader} />
			<Route 
			path=":id"
			element={<CareersDetails/>} 
			loader={careerDetailsLoader}/>
			
			</Route>
			<Route path="*" element={<PageNotFound />} />
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById("root")).render(
	
	<RouterProvider router={router} />

);