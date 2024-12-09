import { useState } from "react";
import Form from "../components/Form";
import { nanoid } from "nanoid";

function App() {
	const [data, setData] = useState({
		id: `${nanoid()}`,
		generalInfo: {
			firstName: "John",
			lastName: "Doe",
			email: "example@gmail.com",
			phone: "123-456-7890",
		},
		education: {
			schoolName: "Manor High School",
			degree: "HS Diploma",
			dateAttended: {
				from: 2002,
				to: 2020,
			},
		},
		jobHistory: {
			companyName: " My Startup",
			jobTitle: "Ceo",
			duties: ["Management", "Payroll", "Marketing"],
			datesWorked: {
				from: 2000,
				to: 2020,
			},
		},
	});

    	function handleChange(e,id) {
		const entries = e.target.value;

		if (id === "First Name") {
			setData({
				...entry,
				generalInfo: { ...entry.generalInfo, firstName: entries },
			});
            alert("d")
		} else if (id === "Last Name") {
			setData({
				...entry,
				generalInfo: { ...entry.generalInfo, lastName: entries },
			});
		} else if (id === "Email") {
			setData({
				...entry,
				generalInfo: { ...entry.generalInfo, email: entries },
			});
		} else if (id === "Phone") {
			setData({
				...entry,
				generalInfo: { ...entry.generalInfo, phone: entries },
			});
		} else if (id === "School Name") {
			setData({
				...entry,
				education: { ...entry.education, schoolName: entries },
			});
		} else if (id === "Degree Earned") {
			setData({
				...entry,
				education: { ...entry.education, degree: entries },
			});
		} else if (id === "Date From:") {
			setData({
				...entry,
				education: { ...entry.education, dateAttended:{...entry.education.dateAttended, from: entries } },
			});
		} else if (id === "Date To:") {
			setData({
				...entry,
				education: { ...entry.education, dateAttended:{...entry.education.dateAttended, to:entries}}
			});
		} else if (id === "Company Name") {
			setData({
				...entry,
				jobHistory: { ...entry.jobHistory, companyName: entries },
			});
		} else if (id === "Position") {
			setData({
				...entry,
				jobHistory: { ...entry.jobHistory, jobTitle: entries },
			});
		} else if (id === "Duties") {
			
		
		} else if (id === "Employed From:") {
			setData({
				...entry,
				jobHistory: { ...entry.jobHistory, datesWorked:{...entry.jobHistory.datesWorked, from: entries}},
			});
		} else {
			setData({
				...entry,
				jobHistory: { ...entry.jobHistory, datesWorked: {...entry.jobHistory.datesWorked, to: entries} },
			});
		}

		console.log(entry);
	}

	return (
		<>
			<div>
				<header>
					<h1>Enter Info</h1>
					<label htmlFor="First Name">
						First Name
						<input type="text" id="First Name"  onChange={() => handleChange(e,"First Name")}/>
					</label>
					<label htmlFor="Last Name">
						Last Name
						<input type="text" id="Last Name" onChange={handleChange} />
					</label>
					<label htmlFor="Email">
						Email
						<input type="text" id="Email"  onChange={handleChange}/>
					</label>
					<label htmlFor="Phone">
						Phone
						<input type="text" id="Phone"  onChange={handleChange}/>
					</label>
					<label htmlFor="School Name">
						School Name
						<input type="text" id="School Name"  onChange={handleChange}/>
					</label>
					<label htmlFor="Degree Earned">
						Degree Earned
						<input type="text" id="Degree Earned" onChange={handleChange} />
					</label>
					<label htmlFor="Date From:">
						Date From:
						<input type="text" id="Date From:"  onChange={handleChange}/>
					</label>
					<label htmlFor="Date To:">
						Date To:
						<input type="text" id="Date To:" onChange={handleChange} />
					</label>
					<label htmlFor="Company Name">
						Company Name
						<input type="text" id="Company Name"  onChange={handleChange}/>
					</label>
					<label htmlFor="Position">
						Position
						<input type="text" id="Position"  onChange={handleChange}/>
					</label>
					<label htmlFor="Duties">
						Duties
						<input type="text" id="Duties"  onChange={handleChange}/>
					</label>
					<label htmlFor="Employed From:">
						Employed From:
						<input type="text" id="Employed From:"  onChange={handleChange}/>
					</label>
					<label htmlFor="Employed To:">
						Employed To:
						<input type="text" id="Employed To:"  onChange={handleChange}/>
					</label>
				</header>
				<button>Add More</button> <button>Edit</button>
				<button>Submit</button>
			</div>
			<section>
				<h1>My Info</h1>
				<fieldset>
					<legend>Bio</legend>
                    <span>First Name: {data.generalInfo.firstName} <br /> Last Name: {data.generalInfo.lastName} </span> <br/>
                    <span>Email: {data.generalInfo.email}</span> <br />
                    <span>Phone: {data.generalInfo.phone}</span> <br />
				</fieldset>
<fieldset>
    <legend>Job History</legend>
    <span>Company Name:{data.jobHistory.companyName}</span> <br />
    <span>Position:{data.jobHistory.jobTitle}</span> <br />
   <span>Duties: {data.jobHistory.duties.map((duty) => <span> {duty}</span>)}</span>  <br />
    <span>Employed From: {data.jobHistory.datesWorked.from} </span> <br />
    <span>Employed To: {data.jobHistory.datesWorked.to} </span> <br />
</fieldset>
<fieldset>
    <legend>Education</legend>
    <span>School Name: {data.education.schoolName}</span> <br />
    <span>Degree Earned: {data.education.degree}</span> <br />
    <span>Attended From: {data.education.dateAttended.from}</span> <br />
    <span>Attended To: {data.education.dateAttended.to}</span>
</fieldset>
			</section>
		</>
	);
}

export default App;
