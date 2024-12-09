import {Outlet,useOutletContext} from 'react-router-dom'

export default function ShoppingCartLayout() {
    const [buildCart,setBuildCart] = useOutletContext()
  return (
    <div>ShoppingCartLayout</div>
  )
}
