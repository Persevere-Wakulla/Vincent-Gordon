import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h2>Page Not Found!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolorem deleniti impedit, inventore sed minima, ad in, porro esse soluta minus totam. Inventore facilis nam illum consequuntur blanditiis molestiae in.</p>
        <p>Go to the <Link to='/' >Homepage</Link></p>
    </div>
  )
}
