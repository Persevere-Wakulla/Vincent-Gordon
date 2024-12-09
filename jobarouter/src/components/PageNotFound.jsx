import {Link} from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div>
        <h2>Page Not Found!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, optio similique. Placeat dolor iusto totam dignissimos ipsam vel, voluptate quia.</p>
        <p>Go to the <Link to='/'>HomePage</Link>.</p>
    </div>
  )
}
