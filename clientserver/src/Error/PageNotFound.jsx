import {Link} from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div>
        <h2>Page Not Found!</h2>
        <p>Go to the <Link to='/'>HomePage!</Link> </p>
    </div>
  )
}
