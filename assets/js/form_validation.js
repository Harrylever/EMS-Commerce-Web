let form = document.getElementById('form');
let full_name = document.getElementById('fullname');
let email = document.getElementById('email');
let phone_number = document.getElementById('phone_number');

form.addEventListener('submit', e => {
    e.preventDefault();
    // if ()
    validateInputs();
    // e.currentTarget.submit();
})

let setError = (element, message) => {
    let inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

let setSuccess = element => {
    let inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

let email_boolean;
let phone_number_boolean;

const validateInputs = () => {
    let full_name_value = full_name.value.trim();
    let email_value = email.value.trim();
    let phone_number_value = phone_number.value.trim();

    // Full name validation
   if (full_name_value === '') {
        setError(full_name, 'Your full name is required');
    } else {
        setSuccess(full_name)
    }

    // Email Address Validation
   if (email_value === '') {
        setError(email, 'Your Email Address is required');
        email_boolean = false;
    }
    else if (!isValidEmail(email_value)) {
        setError(email, 'Provide a valid email address');
        email_boolean = false;
    }
    else {
        setSuccess(email);
        email_boolean = true;
    }

    // Phone Number Validation
    if (phone_number_value === '') {
        setError(phone_number, 'Phone Number is required');
        phone_number_boolean = false;
    }
    else if ((phone_number_value.length < 11) || (phone_number_value.length > 11)) {
        setError(phone_number, 'Phone number is 11 digits!')
        phone_number_boolean = false;
    }
    else {
        setSuccess(phone_number)
        phone_number_boolean = true;
    }

    if(full_name_value !== '' && phone_number_boolean == true && email_boolean == true) {
        if((document.getElementById('total_price').innerHTML === 0) || (document.getElementById('total_price').innerHTML === '0')) {
            alert('You need to add an item to cart before you Checkout.')
        } else {
            BuildSummaryModal();
            cart_order_container.style.display = 'none';
            payWithPaystack();
        }
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


function summaryDisplayClose() {
    let summary_modal = document.getElementById('summary_modal_container');
    enableScroll();
    summary_modal.style.display = 'none';
}

let indexNum = 0;
let htmlTR_2 = '';
let summary_cart_list = document.getElementById('summary_client_purchase_item_table');

function BuildSummaryModal() {

    summary_cart_list.innerHTML = '';
    htmlTR_2 = '';
    indexNum = 0;

    let d_cart_length = document.getElementById('cart_list').children[0].children.length;
    // console.log('This is the length of d_cart: ' + d_cart_length);
    for (let e = 0; e < d_cart_length; e++) {
        indexNum++;
        htmlTR_2 += `<tr id="htmlTR_2_!D${indexNum}">`;
        htmlTR_2 += `<td style="width: 25%;">${indexNum}</td>`;
        htmlTR_2 += `<td style="width: 25%;">${document.getElementById('cart_list').children[0].children[e].children[1].innerHTML}</td>`;
        htmlTR_2 += `<td style="width: 25%;">${document.getElementById('cart_list').children[0].children[e].children[3].children[1].innerHTML}</td>`;
        htmlTR_2 += '</tr>';
    }
    summary_cart_list.innerHTML += htmlTR_2;
}


function displaySummaryModal2() {
    let summary_modal = document.getElementById('summary_modal_container');
    let summaryClient = full_name.value.trim();
    let summaryClient2 = summaryClient.toUpperCase();
    document.getElementById('summary_client_name').innerHTML = summaryClient2;
    disableScroll()
    summary_modal.style.display = 'flex';
}

function payWithPaystack() {
    let total_price_value = Math.floor(document.getElementById('total_price').innerHTML);
    var handler = PaystackPop.setup({
        key: 'pk_test_bdd9a7be1608627a1bc12db5d24f367231e3b1ff', // Replace with your public key
        email: email.value,
        //   amount: document.getElementById('amount').value * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
        amount: total_price_value * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
        currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars
        ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        // label: "Optional string that replaces customer email"
        onClose: function(){
            alert('Window closed.');
        },
        callback: function(){

            displaySummaryModal2();
        }
    });
    handler.openIframe();
}
