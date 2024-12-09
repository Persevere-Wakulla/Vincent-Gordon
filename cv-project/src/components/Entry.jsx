
import Add from "./Add";
function Entry({ entry, useState, name, addEntry, value ,add}) {
	function handleSubmit(e) {
		// console.log(props.entry);
		e.preventDefault();
		addEntry("hey");
		alert("i work");
	}
	
	function handleChange(e) {
		const entries = e.target.value;

		if (name === "First Name") {
			useState({
				...entry,
				generalInfo: { ...entry.generalInfo, firstName: entries },
			});
		} else if (name === "Last Name") {
			useState({
				...entry,
				generalInfo: { ...entry.generalInfo, lastName: entries },
			});
		} else if (name === "Email") {
			useState({
				...entry,
				generalInfo: { ...entry.generalInfo, email: entries },
			});
		} else if (name === "Phone") {
			useState({
				...entry,
				generalInfo: { ...entry.generalInfo, phone: entries },
			});
		} else if (name === "School Name") {
			useState({
				...entry,
				education: { ...entry.education, schoolName: entries },
			});
		} else if (name === "Degree Earned") {
			useState({
				...entry,
				education: { ...entry.education, degree: entries },
			});
		} else if (name === "Date From:") {
			useState({
				...entry,
				education: { ...entry.education, dateAttended:{...entry.education.dateAttended, from: entries } },
			});
		} else if (name === "Date To:") {
			useState({
				...entry,
				education: { ...entry.education, dateAttended:{...entry.education.dateAttended, to:entries}}
			});
		} else if (name === "Company Name") {
			useState({
				...entry,
				jobHistory: { ...entry.jobHistory, companyName: entries },
			});
		} else if (name === "Position") {
			useState({
				...entry,
				jobHistory: { ...entry.jobHistory, jobTitle: entries },
			});
		} else if (name === "Duties") {
			
		
		} else if (name === "Employed From:") {
			useState({
				...entry,
				jobHistory: { ...entry.jobHistory, datesWorked:{...entry.jobHistory.datesWorked, from: entries}},
			});
		} else {
			useState({
				...entry,
				jobHistory: { ...entry.jobHistory, datesWorked: {...entry.jobHistory.datesWorked, to: entries} },
			});
		}

		console.log(entry);
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor={name}>{name}</label>
				<input type="text" id={name} onChange={handleChange} value={value} />
				<span></span>
			</form>
		</>
	);
}

export default Entry;
