import { useState } from 'react';
import removeFromCart from '../CART/removeFromCart';
import getCartItemsSummary from '../GETTERS/getCartItemsSummary';
import encreaseQTY from '../CART/encreaseQTY';
import decreaseQTY from '../CART/decreaseQTY';
import totalPrice from '../CART/totalPrice';

export default function({handleCartSummary}) {

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.cartItemsList));
    
    const removeItem = (item) => {
        removeFromCart(item);
        setCartItems(JSON.parse(localStorage.cartItemsList))
        handleCartSummary(getCartItemsSummary());
    }
    const encrease = (item) => {
        encreaseQTY(item);
        setCartItems(JSON.parse(localStorage.cartItemsList))
    }
    const decrease = (item) => {
        decreaseQTY(item);
        setCartItems(JSON.parse(localStorage.cartItemsList))
    }

    
    if (!getCartItemsSummary()) {
        return (
            <div id='display'>
                <div id='cart-item-bar'>
                    Now your cart is empty
                </div>
            </div>
        )
    }
  return (
    <div id='display' >
        <div id='cart-item-bar'>
            {
                cartItems.map((item) => {

                    let price;
                    try {
                        price = `$${item.srm.toFixed(2)}`
                    } catch (error) {
                        price = `$${item.srm}`
                    }
                    return (
                        <div key={item.id} id={`cart-${item.id}`} className='cart-item-element' >
                            <img className='cart-item-element-image' 
                                alt='Sorry, no picture to show'
                                src={item.image_url}
                            ></img>
                            <div id={`discription-${item.id}`} className='cart-item-discription' >
                                <div id={`cart-item-name-tagline-${item.id}`} className='cart-item-name-tagline' >
                                    <p className='cart-item-tagline' >{item.tagline}</p>
                                    <p className='cart-item-name' >{item.name}</p>
                                </div>
                                <div id={`cart-item-quantity-div-${item.id}`} className='cart-item-quantity-div' >
                                    <button className='cart-item-quantity-decrement' 
                                        onClick={() => {
                                            decrease(item);
                                    }} ><i className="fa fa-angle-down"></i></button>
                                    <input className='cart-item-quantity'
                                        min={1}
                                        max={10}
                                        step={1}
                                        value={item.quantity}
                                        onChange={() => {return}}
                                    ></input>
                                    <button className='cart-item-quantity-encrement' 
                                        onClick={() => {
                                            encrease(item);
                                    }} ><i className="fa fa-angle-up"></i></button>
                                </div>
                                <div className='cart-item-remove' 
                                    onClick={() => {
                                        removeItem(item)
                                    }}
                                ><i className="fa fa-close"></i></div>
                                <p className='cart-item-price' >
                                    {price}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
                <hr className='cart-total-line'></hr>
                <label className='cart-total-label'>Total: {`$${totalPrice(cartItems)}`}</label>
                <button className='cart-check-out-btn'>CHECK OUT</button>
        </div>
    </div>
  )
}


