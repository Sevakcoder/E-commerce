import getIndexById from "../GETTERS/getIndexById";
import checkItemExist from "./checkItemExist";

export default function (selectedItem) {
    if (localStorage.cartItemsList) {
        let itemsInCartItemList = JSON.parse(localStorage.cartItemsList);
        let itemExistInfo = checkItemExist(selectedItem.id,itemsInCartItemList)
        if (!itemExistInfo.exist) {
            itemsInCartItemList.unshift(selectedItem);
            localStorage.setItem("cartItemsList",JSON.stringify(itemsInCartItemList))
            alert ("The item has been successfully added to your Cart!");
        }else {
            let confirmText = `Your cart already contains this item with an amount of ${itemExistInfo.item.quantity}!\n
                    Do you still want to add it ?
            \nTo continue adding: Press "Ok"\nTo cancel adding: Press "Cancel"`;
            if (window.confirm(confirmText)) {
                let itemIndexInCartItemsList = getIndexById(selectedItem.id,itemsInCartItemList)
                itemsInCartItemList[itemIndexInCartItemsList].quantity = Number(itemsInCartItemList[itemIndexInCartItemsList].quantity)
                    + Number(selectedItem.quantity);
                let alertText = `The item has been successfully added to your Cart!\nNow the total amount of this item in your Cart is ${itemsInCartItemList[itemIndexInCartItemsList].quantity}`;
                localStorage.setItem("cartItemsList",JSON.stringify(itemsInCartItemList))
                alert(alertText)
            }
        }
    }else {
        localStorage.setItem("cartItemsList",JSON.stringify([selectedItem]));
        alert ("The item has been successfully added to your Cart!");
    }
}
