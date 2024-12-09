import {Outlet,NavLink} from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

export default function RootLayout() {
  return (
    <div className='root-layout'>
        <header>
            <nav>
                <h1>JobARouter</h1>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='help'>Help</NavLink>
                <NavLink to='careers'>Careers</NavLink>
            </nav>
            <Breadcrumb />
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}
