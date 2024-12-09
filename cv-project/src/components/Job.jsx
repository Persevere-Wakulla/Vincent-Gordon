import Add from "./Add"
import Edit from "./Edit"
import Entry from "./Entry"
function Job ({entry,addEntry,useState}) {
    // const duties = entry.jobHistory.duties.map((duty) => <span> {duty} </span>)
function addMore () {
    const test = entry.jobHistory.duties.map((duty) => <Entry name= {duty} />)
    return test
}

    return (
        
        <>
        <div>
            <Entry name= "Company Name" value ={entry.jobHistory.companyName} entry={entry}  useState={useState} />
            <Entry name = "Position"value={entry.jobHistory.jobTitle} entry={entry} useState={useState} />
           <Entry name="Duties" useState={useState} entry={entry} add={<Add />} addEntry={addEntry} /><Add name= "Add More" onClick={addMore}/>
         
            <Entry name= "Employed From:" value={entry.jobHistory.datesWorked.from} entry={entry}  useState={useState} />
            <Entry name= "Employed To:" value={entry.jobHistory.datesWorked.to} entry={entry}  useState={useState} />
			<Add name="Add School" />
			<Edit name="Edit School" /> 
        </div>
			
		</>
        
    )
}

export default Job