import {useLocation, Link} from 'react-router-dom'

export default function Breadcrumbs() {
    const location = useLocation()
    // if url is help/contact --> split into help | contact == breadcrumbs
    let currentLink = ''
    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
        currentLink += `/${crumb}`
        return (
            <div key={crumb}><Link to={currentLink}>{crumb}</Link></div>
        )
    })
  return (
    <div>
{crumbs}
    </div>
  )
}
