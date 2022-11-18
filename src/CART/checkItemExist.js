export default function (itemId,itemsList) {
    let exist = false;
    let existingItem = {};
    for (const item of itemsList) {
        if (item.id == itemId) {
            exist = true;
            existingItem = {...item}
            break;
        }
    }
    return {
        exist: exist, 
        item: existingItem
    };
}
