import getIndexById from "../GETTERS/getIndexById";

export default function(item) {
    let cartItems = JSON.parse(localStorage.cartItemsList)
    let encreasedItemIndex = getIndexById(item.id,cartItems)
    cartItems[encreasedItemIndex].quantity = Number(cartItems[encreasedItemIndex].quantity) + 1;
    localStorage.setItem('cartItemsList',JSON.stringify([...cartItems]))

}