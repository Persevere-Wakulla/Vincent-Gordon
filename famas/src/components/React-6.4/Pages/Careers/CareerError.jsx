import {useRouteError,Link} from 'react-router-dom'

export default function CareerError() {
    const error = useRouteError()
  return (
    <div>
        <h2>Error</h2>
        {error.message}
        <Link to='/' >Back to the Homepage!</Link>
    </div>
  )
}
