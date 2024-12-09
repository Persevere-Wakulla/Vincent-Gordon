import logo from "../assets/react.svg";
import Add from "../components/Add";
import Edit from "../components/Edit";
import Submit from "../components/Submit";
import Entry from "../components/Entry";
import School from "./School";
import Job from "./Job";
import "../boilerPlate/App.css";

function Form({ entry, useState }) {

	function addEntry(entr) {
		alert(entr);
		console.log(entry);

	}

	return (
		<>
			<header>
				<img src={logo} alt={logo} />
				<p> My Resume</p>
			</header>
			<section className="section-container">
				<Entry  name="First Name" addEntry={addEntry} entry={entry} useState={useState} value = {entry.generalInfo.firstName} />
				<Entry name="Last Name" addEntry={addEntry} entry={entry} useState={useState} value= {entry.generalInfo.lastName}/>
				<Entry name="Email" addEntry={addEntry} entry={entry} useState={useState} value = {entry.generalInfo.email} />
				<Entry name="Phone" addEntry={addEntry} entry={entry} useState={useState} value ={entry.generalInfo.phone} />
			</section>
			<School addEntry={addEntry} useState={useState} entry= {entry} />
			<Job addEntry={addEntry} useState={useState} entry= {entry} />

		</>
	);
}

export default Form;
