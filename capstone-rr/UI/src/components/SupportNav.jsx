import {NavLink} from 'react-router-dom'
export default function SupportNav() {
  return (
    <div className='headerBtns subNav'>
        <NavLink to='contactus'>Contact Us</NavLink>
        <NavLink to='faq'>F.A.Q</NavLink>
        <NavLink to='coupons'>Coupons</NavLink>
    </div>
  )
}
