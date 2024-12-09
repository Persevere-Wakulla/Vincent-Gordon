import {Outlet,useOutletContext} from 'react-router-dom'

export default function SearchLayout() {
  const [searchQuery,setSearchQuery,
					buildCart,
					setBuildCart,
					basket,
					setBasket,
					quantity,
					setQuantity,
					price,
					setPrice,] = useOutletContext()
  return (
    <div>
        <Outlet context={[searchQuery,setSearchQuery,
					buildCart,
					setBuildCart,
					basket,
					setBasket,
					quantity,
					setQuantity,
					price,
					setPrice,]} />
    </div>
  )
}
