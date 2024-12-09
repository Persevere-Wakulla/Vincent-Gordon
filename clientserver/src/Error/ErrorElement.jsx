import {useRouteError,Link} from 'react-router-dom'
export default function ErrorElement() {
const error = useRouteError()
  return (
    <div>
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to='/'>Back to HomePage!</Link>
    </div>
  )
}
