export default function () {
    let summary = 0;
    if (localStorage.cartItemsList) {
        let items=JSON.parse(localStorage.cartItemsList)
        summary = items.length;
    }
    return summary;
}

