import '../CSS/cart.css'
import DisplayCart from '../DISPLAY/DisplayCart'
import cleanGoBackStorage from '../OTHER/cleanGoBackStorage'
import { useEffect } from 'react' 

const Cart = ({handleCartSummary,hideFilterButton}) => {
    
    cleanGoBackStorage();

    useEffect(() => {
        hideFilterButton();
      },[])
    
    if (!localStorage.cartItemsList) {
        return (
            <div id='display'>
                <div id='cart-item-bar'>
                    Your cart is empty
                </div>
            </div>
        )
    }
    return (
          <DisplayCart handleCartSummary={handleCartSummary} />
    )
}
  
export default Cart;
  