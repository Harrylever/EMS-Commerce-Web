let btn1 = document.getElementById('product1');
let btn2 = document.getElementById('product2');
let btn3 = document.getElementById('product3');
let btn4 = document.getElementById('product4');
let btn5 = document.getElementById('product5');
let btn6 = document.getElementById('product6');
let cart_value = document.getElementById('cart_value');

let cart = new Array();

let rem_display_btn_arr = [];
let newChild = '';

let total_price_var_REAL = document.getElementById('total_price');

let total_price_num2 = 0;
let total_price_num3 = 0;

let total_price_var2 = '';

let cart_order = document.getElementById('cart_order');

let products = [
    {
        index: 1,
        id: 'p1',
        name: 'Samsung TV',
        price: 500000,
        quantity: 1,
    },
    {
        index: 2,
        id: 'p2',
        name: 'Pixel 4a',
        price: 250000,
        quantity: 1,
    },
    {
        index: 3,
        id: 'p3',
        name: 'PS 5',
        price: 300000,
        quantity: 1,
    },
    {
        index: 4,
        id: 'p4',
        name: 'MacBook Air',
        price: 800000,
        quantity: 1,
    },
    {
        index: 5,
        id: 'p5',
        name: 'Apple Watch',
        price: 95000,
        quantity: 1,
    },
    {
        index: 6,
        id: 'p6',
        name: 'Air Pods',
        price: 75000,
        quantity: 1,
    },
]
// console.log(products[0])


let value1 = 1;
let value2 = 1;
let value3 = 1;
let value4 = 1;
let value5 = 1;
let value6 = 1;


function add() {
    document.getElementById('add_btn0').onclick = function() {
        total_price_num3 = 0;
        value1 = value1 + 1;
        document.getElementById('quantity0').innerHTML = value1;
        document.getElementById('item_Price0').innerHTML = value1 * cart[0].price;
        cart[0].quantity = value1;
        for (let a = 0; a < cart.length; a++) {
            total_price_var2 = document.getElementById(`item_Price${a}`).innerHTML;
            // console.log('total_price_var2: ' + total_price_var2);
            total_price_num2 = Math.floor(total_price_var2);
            // console.log('total_price_num2: ' + total_price_num2);
            total_price_num3 += total_price_num2;
            // console.log('total_price_num3: ' + total_price_num3);
            total_price_var_REAL.innerHTML = total_price_num3;
            // console.log('total_price_var_REAL: ' + total_price_var_REAL.innerHTML);
        }
    };

    document.getElementById('add_btn1').onclick = function() {
        total_price_num3 = 0;
        value2 = value2 + 1;
        document.getElementById('quantity1').innerHTML = value2;
        document.getElementById('item_Price1').innerHTML = value2 * cart[1].price;
        cart[1].quantity = value2;
        for (let a = 0; a < cart.length; a++) {
            total_price_var2 = document.getElementById(`item_Price${a}`).innerHTML;
            // console.log('total_price_var2: ' + total_price_var2);
            total_price_num2 = Math.floor(total_price_var2);
            // console.log('total_price_num2: ' + total_price_num2);
            total_price_num3 += total_price_num2;
            // console.log('total_price_num3: ' + total_price_num3);
            total_price_var_REAL.innerHTML = total_price_num3;
            // console.log('total_price_var_REAL: ' + total_price_var_REAL.innerHTML);
        }
    };

    document.getElementById('add_btn2').onclick = function() {
        total_price_num3 = 0;
        value3 = value3 + 1;
        document.getElementById('quantity2').innerHTML = value3;
        document.getElementById('item_Price2').innerHTML = value3 * cart[2].price;
        cart[2].quantity = value3;
        for (let a = 0; a < cart.length; a++) {
            total_price_var2 = document.getElementById(`item_Price${a}`).innerHTML;
            // console.log('total_price_var2: ' + total_price_var2);
            total_price_num2 = Math.floor(total_price_var2);
            // console.log('total_price_num2: ' + total_price_num2);
            total_price_num3 += total_price_num2;
            // console.log('total_price_num3: ' + total_price_num3);
            total_price_var_REAL.innerHTML = total_price_num3;
            // console.log('total_price_var_REAL: ' + total_price_var_REAL.innerHTML);
        }
    };

    document.getElementById('add_btn3').onclick = function() {
        total_price_num3 = 0;
        value4 = value4 + 1;
        document.getElementById('quantity3').innerHTML = value4;
        document.getElementById('item_Price3').innerHTML = value4 * cart[3].price;
        cart[3].quantity = value4;
        for (let a = 0; a < cart.length; a++) {
            total_price_var2 = document.getElementById(`item_Price${a}`).innerHTML;
            // console.log('total_price_var2: ' + total_price_var2);
            total_price_num2 = Math.floor(total_price_var2);
            // console.log('total_price_num2: ' + total_price_num2);
            total_price_num3 += total_price_num2;
            // console.log('total_price_num3: ' + total_price_num3);
            total_price_var_REAL.innerHTML = total_price_num3;
            // console.log('total_price_var_REAL: ' + total_price_var_REAL.innerHTML);
        }
    };

    document.getElementById('add_btn4').onclick = function() {
        total_price_num3 = 0;
        value5 = value5 + 1;
        document.getElementById('quantity4').innerHTML = value5;
        document.getElementById('item_Price4').innerHTML = value5 * cart[4].price;
        cart[4].quantity = value5;
        for (let a = 0; a < cart.length; a++) {
            total_price_var2 = document.getElementById(`item_Price${a}`).innerHTML;
            // console.log('total_price_var2: ' + total_price_var2);
            total_price_num2 = Math.floor(total_price_var2);
            // console.log('total_price_num2: ' + total_price_num2);
            total_price_num3 += total_price_num2;
            // console.log('total_price_num3: ' + total_price_num3);
            total_price_var_REAL.innerHTML = total_price_num3;
            // console.log('total_price_var_REAL: ' + total_price_var_REAL.innerHTML);
        }
    };
    
    document.getElementById('add_btn5').onclick = function() {
        total_price_num3 = 0;
        value6= value6 + 1;
        document.getElementById('quantity5').innerHTML = value6;
        document.getElementById('item_Price5').innerHTML = value6 * cart[5].price;
        cart[5].quantity = value6;
        for (let a = 0; a < cart.length; a++) {
            total_price_var2 = document.getElementById(`item_Price${a}`).innerHTML;
            // console.log('total_price_var2: ' + total_price_var2);
            total_price_num2 = Math.floor(total_price_var2);
            // console.log('total_price_num2: ' + total_price_num2);
            total_price_num3 += total_price_num2;
            // console.log('total_price_num3: ' + total_price_num3);
            total_price_var_REAL.innerHTML = total_price_num3;
            // console.log('total_price_var_REAL: ' + total_price_var_REAL.innerHTML);
        }
    };
    
    // End of a add() function
}



function minus() {
    document.getElementById('minus_btn0').onclick = function() {
        if (value1 === 1) {
            value1 = 1;
        }
        else if (value1 > 1) {
            total_price_num3 = 0;
            value1 = value1 - 1;
            document.getElementById('quantity0').innerHTML = value1;
            document.getElementById('item_Price0').innerHTML = value1 * cart[0].price;
            cart[0].quantity = value1;
            for (let a = 0; a < cart.length; a++) {
                total_price_var2 = document.getElementById(`item_Price${a}`).innerHTML;
                // console.log('total_price_var2: ' + total_price_var2);
                total_price_num2 = Math.floor(total_price_var2);
                // console.log('total_price_num2: ' + total_price_num2);
                total_price_num3 += total_price_num2;
                // console.log('total_price_num3: ' + total_price_num3);
                total_price_var_REAL.innerHTML = total_price_num3;
                // console.log('total_price_var_REAL: ' + total_price_var_REAL.innerHTML);
            };
        };    
    };

    document.getElementById('minus_btn1').onclick = function() {
        if (value2 === 1) {
            value2 = 1;
        }
        else if (value2 > 1) {
            total_price_num3 = 0;
            value2 = value2 - 1;
            document.getElementById('quantity1').innerHTML = value2;
            document.getElementById('item_Price1').innerHTML = value2 * cart[1].price;
            cart[1].quantity = value2;
            for (let a = 0; a < cart.length; a++) {
                total_price_var2 = document.getElementById(`item_Price${a}`).innerHTML;
                // console.log('total_price_var2: ' + total_price_var2);
                total_price_num2 = Math.floor(total_price_var2);
                // console.log('total_price_num2: ' + total_price_num2);
                total_price_num3 += total_price_num2;
                // console.log('total_price_num3: ' + total_price_num3);
                total_price_var_REAL.innerHTML = total_price_num3;
                // console.log('total_price_var_REAL: ' + total_price_var_REAL.innerHTML);
            };
        }
    }
    document.getElementById('minus_btn2').onclick = function() {
        if (value3 === 1) {
            value3 = 1;
        }
        else if (value3 > 1) {
            total_price_num3 = 0;
            value3 = value3 - 1;
            document.getElementById('quantity2').innerHTML = value3;
            document.getElementById('item_Price2').innerHTML = value3 * cart[2].price;
            cart[2].quantity = value3;
            for (let a = 0; a < cart.length; a++) {
                total_price_var2 = document.getElementById(`item_Price${a}`).innerHTML;
                // console.log('total_price_var2: ' + total_price_var2);
                total_price_num2 = Math.floor(total_price_var2);
                // console.log('total_price_num2: ' + total_price_num2);
                total_price_num3 += total_price_num2;
                // console.log('total_price_num3: ' + total_price_num3);
                total_price_var_REAL.innerHTML = total_price_num3;
                // console.log('total_price_var_REAL: ' + total_price_var_REAL.innerHTML);
            };
        }
    }
    document.getElementById('minus_btn3').onclick = function() {
        if (value4 === 1) {
            value4 = 1;
        }
        else if (value4 > 1) {
            total_price_num3 = 0;
            value4 = value4 - 1;
            document.getElementById('quantity3').innerHTML = value4;
            document.getElementById('item_Price3').innerHTML = value4 * cart[3].price;
            cart[3].quantity = value4;
            for (let a = 0; a < cart.length; a++) {
                total_price_var2 = document.getElementById(`item_Price${a}`).innerHTML;
                // console.log('total_price_var2: ' + total_price_var2);
                total_price_num2 = Math.floor(total_price_var2);
                // console.log('total_price_num2: ' + total_price_num2);
                total_price_num3 += total_price_num2;
                // console.log('total_price_num3: ' + total_price_num3);
                total_price_var_REAL.innerHTML = total_price_num3;
                // console.log('total_price_var_REAL: ' + total_price_var_REAL.innerHTML);
            };
        }
    }
    document.getElementById('minus_btn4').onclick = function() {
        if (value5 === 1) {
            value5 = 1;
        }
        else if (value5 > 1) {
            total_price_num3 = 0;
            value5 = value5 - 1;
            document.getElementById('quantity4').innerHTML = value5;
            document.getElementById('item_Price4').innerHTML = value5 * cart[4].price;
            cart[4].quantity = value5;
            for (let a = 0; a < cart.length; a++) {
                total_price_var2 = document.getElementById(`item_Price${a}`).innerHTML;
                // console.log('total_price_var2: ' + total_price_var2);
                total_price_num2 = Math.floor(total_price_var2);
                // console.log('total_price_num2: ' + total_price_num2);
                total_price_num3 += total_price_num2;
                // console.log('total_price_num3: ' + total_price_num3);
                total_price_var_REAL.innerHTML = total_price_num3;
                // console.log('total_price_var_REAL: ' + total_price_var_REAL.innerHTML);
            };
        }
    }
    document.getElementById('minus_btn5').onclick = function() {
        if (value6 === 1) {
            value6 = 1;
        }
        else if (value6 > 1) {
            total_price_num3 = 0;
            value6 = value6 - 1;
            document.getElementById('quantity5').innerHTML = value6;
            document.getElementById('item_Price5').innerHTML = value6 * cart[5].price;
            cart[5].quantity = value6;
            for (let a = 0; a < cart.length; a++) {
                total_price_var2 = document.getElementById(`item_Price${a}`).innerHTML;
                // console.log('total_price_var2: ' + total_price_var2);
                total_price_num2 = Math.floor(total_price_var2);
                // console.log('total_price_num2: ' + total_price_num2);
                total_price_num3 += total_price_num2;
                // console.log('total_price_num3: ' + total_price_num3);
                total_price_var_REAL.innerHTML = total_price_num3;
                // console.log('total_price_var_REAL: ' + total_price_var_REAL.innerHTML);
            };
        }    
    }

    // End of Minus Function
}

// Cart list Table Element
let cart_list = document.getElementById('cart_list');
let numy = 0;

let htmlTR = '';

let cartUpdater = () => {
    let total_price_num = 0;
    cart_list.innerHTML = "";
    htmlTR = '';
    numy = 0;

    // console.log(remBtn_TD);
    for(let a = 0; a < cart.length; a++) {
        
        cart_list.innerHTML = "";
        numy++;
        htmlTR += `<tr id="htmlTR_ID${numy}">`;
        htmlTR += `<td style="width: 7%;">${numy}</td>`;
        htmlTR += `<td style="width: 25%;">${cart[a].name}</td>`;
        htmlTR += `<td style="width: 25%;"><span id="item_Price${a}">${cart[a].price}</span></td>`;
        htmlTR += `<td style="width: 15%; padding-left: 23px;"><button id="minus_btn${a}" onclick="minus()">-</button><span id="quantity${a}">${cart[a].quantity}</span><button id="add_btn${a}" onclick="add()">+</button></td>`;
        htmlTR += '</tr>';
        cart_list.innerHTML += htmlTR;
        total_price_num += cart[a].price;
    }
    
    // console.log(total_price_num);
    total_price_var_REAL.innerHTML = total_price_num.toString();

    for(let b = 0; b < cart.length; b++) {

        var remBtn_TD = document.createElement('td');
        remBtn_TD.style.width = '25%';
        var remBtn = document.createElement('button');
        remBtn.classList.add('rem_btn_');
        // Where the element gets the id rem_display_btn1
        // so I'm choosing the first button that is produced
        remBtn.id = `rem_display_btn rem_display_btn${b + 1}`;
        remBtn.innerHTML = 'remove';
        
        remBtn_TD.appendChild(remBtn);

        // console.log(cart_list.children[0].children[b].children[4]);
        cart_list.children[0].children[b].appendChild(remBtn_TD);
        // console.log(cart_list.children[0].children[b])
        rem_display_btn_arr += cart_list.children[0].children[b].children[4];
    }

    // console.log(rem_display_btn_arr)
    
}


// Attach HTML table to cart list


btn1.addEventListener('click', () => {
    if (cart.includes(products[0])) {
        for(let i = 0; i < cart.length; i++) {
            if (cart[i] == products[0]) {
                cart.splice(i, 1)
            }
        }
        cart_value.innerHTML = cart.length;
        btn1.style.backgroundColor = '#ff9a3d';
        btn1.innerHTML = "ADD TO CART";
    } else {
        cart.push(products[0]);
        cart_value.innerHTML = cart.length;
        btn1.style.backgroundColor = '#ffddbf';
        btn1.innerHTML = "REMOVE FROM CART";
    }
})

btn2.addEventListener('click', () => {
    if (cart.includes(products[1])) {
        for(let i = 0; i < cart.length; i++) {
            if (cart[i] == products[1]) {
                cart.splice(i, 1)
            }
        }
        cart_value.innerHTML = cart.length;
        btn2.style.backgroundColor = '#ff9a3d';
        btn2.innerHTML = "ADD TO CART";
    } else {
        cart.push(products[1])
        cart_value.innerHTML = cart.length;
        btn2.style.backgroundColor = '#ffddbf';
        btn2.innerHTML = "REMOVE FROM CART";
    }
})

btn3.addEventListener('click', () => {
    if (cart.includes(products[2])) {
        for(let i = 0; i < cart.length; i++) {
            if (cart[i] == products[2]) {
                cart.splice(i, 1)
            }
        }
        cart_value.innerHTML = cart.length;
        btn3.style.backgroundColor = '#ff9a3d';
        btn3.innerHTML = "ADD TO CART";
    } else {
        cart.push(products[2])
        cart_value.innerHTML = cart.length;
        btn3.style.backgroundColor = '#ffddbf';
        btn3.innerHTML = "REMOVE FROM CART";
    }
})

btn4.addEventListener('click', () => {
    if (cart.includes(products[3])) {
        for(let i = 0; i < cart.length; i++) {
            if (cart[i] == products[3]) {
                cart.splice(i, 1)
            }
        }
        cart_value.innerHTML = cart.length;
        btn4.style.backgroundColor = '#ff9a3d';
        btn4.innerHTML = "ADD TO CART";
    } else {
        cart.push(products[3])
        cart_value.innerHTML = cart.length;
        btn4.style.backgroundColor = '#ffddbf';
        btn4.innerHTML = "REMOVE FROM CART";
    }
})

btn5.addEventListener('click', () => {
    if (cart.includes(products[4])) {
        for(let i = 0; i < cart.length; i++) {
            if (cart[i] == products[4]) {
                cart.splice(i, 1)
            }
        }
        cart_value.innerHTML = cart.length;
        btn5.style.backgroundColor = '#ff9a3d';
        btn5.innerHTML = "ADD TO CART";
    } else {
        cart.push(products[4])
        cart_value.innerHTML = cart.length;
        btn5.style.backgroundColor = '#ffddbf';
        btn5.innerHTML = "REMOVE FROM CART";
    }
})

btn6.addEventListener('click', () => {
    if (cart.includes(products[5])) {
        for(let i = 0; i < cart.length; i++) {
            if (cart[i] == products[5]) {
                cart.splice(i, 1)
            }
        }
        cart_value.innerHTML = cart.length;
        btn6.style.backgroundColor = '#ff9a3d';
        btn6.innerHTML = "ADD TO CART";
    } else {
        cart.push(products[5])
        cart_value.innerHTML = cart.length;
        btn6.style.backgroundColor = '#ffddbf';
        btn6.innerHTML = "REMOVE FROM CART";
    }
})


let ctn_shpin2 = document.getElementById('ctn_shpin');

ctn_shpin2.addEventListener('click', () => {
    cart_list.innerHTML = "";
    // console.log('done')
})



let cart_logo2;
cart_logo2 = document.getElementById('cart-logo');
cart_logo2.addEventListener('click', () => {
    cartUpdater();
    // reload();
})

