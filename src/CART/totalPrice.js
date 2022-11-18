export default function(cartItems) {
    let total = 0;
    cartItems.forEach(item => {
        total += Number(item.quantity)*Number(item.srm)
    });
    return total;
}
