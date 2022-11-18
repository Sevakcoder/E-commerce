export default function(itemId,itemList){
    for (var itemIndex in itemList) {
        if (itemList[itemIndex].id === itemId) {
            break
        }
    }
    return itemIndex
}

