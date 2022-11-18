import getIndexById from "../GETTERS/getIndexById";

export default function(item) {
    let cartItems = JSON.parse(localStorage.cartItemsList)
    let decreasedItemIndex = getIndexById(item.id,cartItems)
    if (Number(cartItems[decreasedItemIndex].quantity) !== 1) {
        cartItems[decreasedItemIndex].quantity = Number(cartItems[decreasedItemIndex].quantity) - 1;
        localStorage.setItem('cartItemsList',JSON.stringify([...cartItems]))
    }
}