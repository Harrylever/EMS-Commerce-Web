let ctn_shpin = document.getElementById('ctn_shpin');
let cart_order_container = document.getElementById('cart_order_container');
let cart_logo = document.getElementById('cart-logo');
 
// cart_order_container.style.display = 'flex';

let cart_display_off = () => {
    if (cart_order_container.style.display == 'flex') {
        cart_order_container.style.display = 'none';
    }
 }

let cart_display_on = () => {
        cart_order_container.style.display = 'flex';
}

ctn_shpin.addEventListener('click', () => {
    cart_display_off()
})

cart_logo.addEventListener('click', () => {
    cart_display_on()
})
