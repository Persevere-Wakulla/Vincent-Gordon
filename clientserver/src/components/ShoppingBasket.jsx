import {NavLink} from 'react-router-dom'

export default function ShoppingBasket({func}) {
function showBasket () {
 func()
}

	return (
		<>
            
                <i
                    onClick={() => showBasket()}
                    className="fas icon fa-shopping-cart"
                    id="shoppingCart"
                ></i>
        
		</>
	);
}
