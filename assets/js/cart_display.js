let ctn_shpin = document.getElementById('ctn_shpin');
let cart_order_container = document.getElementById('cart_order_container');
let cart_logo = document.getElementById('cart-logo');
 
// cart_order_container.style.display = 'flex';

let cart_display_off = () => {
    if (cart_order_container.style.display == 'flex') {
        cart_order_container.style.display = 'none';
    }
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() {
    window.onscroll = function() {};
}

let cart_display_on = () => {
    cart_order_container.style.display = 'flex';
    disableScroll()
}

ctn_shpin.addEventListener('click', () => {
    cart_display_off();
    enableScroll();
})

cart_logo.addEventListener('click', () => {
    cart_display_on()
})
