import { useState } from "react"
import {Navigate} from 'react-router-dom'

export default function About() {
  const[user,setUser] = useState('xM0NT3C0R3xFurr')
  if (!user) {
    return (
      <Navigate to='/'replace={true}/>
    )
  }
  return (
    <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, alias. Eius corrupti et distinctio delectus eaque vel blanditiis rem hic?</p>
        <button onClick={() => setUser(null)}>LogOut</button>
    </div>
  )
}
