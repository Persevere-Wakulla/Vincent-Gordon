import Tabs from "./tabs"
import './stylz.css'
function RandomComponent () {

    return <h1>Some Random Content</h1>
}


export default function PlaceTabs () {

    const tabs = [
        {
            label: 'Tab 1',
            content : <div>This is content for Tab 1</div>,
        },
        {
            label: 'Tab 2',
            content : <div>This is content for Tab 2</div>,
        },
        {
            label: 'Tab 3',
            content: <RandomComponent />
        }
    ]

    function handleChange (currentTabIndex) {
        console.log(currentTabIndex);
    }
    return(
        <Tabs tabsContent={tabs} onChange={handleChange}/>
    )
}