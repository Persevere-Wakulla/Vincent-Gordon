import { useState } from "react"
import Mod from "./modal";
import './stylz.css'

export default function Modal () {
    const [showModalPopUp, setShowModalPopUp] = useState(false);
    
    function onClose () {
        setShowModalPopUp(false)
    }

    function handleToggleModalPopUp () {
        setShowModalPopUp(!showModalPopUp)
    }
    return (
        <div>
            <button onClick={handleToggleModalPopUp}>Open Modal PopUp</button>
            {
                showModalPopUp &&  <Mod
                onClose={onClose}
                header={<h1>Customized Header</h1>}
                body={<div>Customized Body</div>}
                footer={<h1>Customized Footer</h1>}
                />
            }
        </div>
    )
}