import Add from "./Add";
import Edit from "./Edit";
import Entry from "./Entry";
function School({ entry, useState, addEntry }) {
	return (
		<>
        <div>
            <Entry name= "School Name" value ={entry.education.schoolName} entry={entry} useState={useState} />
            <Entry name = "Degree Earned"value={entry.education.degree} entry={entry} useState={useState} />
            <Entry name ="Date From:" value={entry.education.dateAttended.from} entry={entry} useState={useState} />
            <Entry name= "Date To:" value={entry.education.dateAttended.to} entry={entry} useState={useState} />
			<Add name="Add School" />
			<Edit name="Edit School" /> 
        </div>
			
		</>
	);
}

export default School;
