import getIndexById from "../GETTERS/getIndexById";

export default function(item) {
    let removeConfirmText = `Are you sure that you want to REMOVE this item from your Cart?
    \nTo remove: Press "Ok"\nTo cancel: Press "Cancel"`



    if (window.confirm(removeConfirmText)) {
        let cartItems = JSON.parse(localStorage.cartItemsList)
        let removedItemIndex = getIndexById(item.id,cartItems)
        cartItems.splice(removedItemIndex,1);
        localStorage.setItem('cartItemsList',JSON.stringify(cartItems))
    }

}