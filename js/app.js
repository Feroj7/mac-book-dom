// memory button event handler and extra memory cost update
const memoryButton1 = document.getElementById('memory-btn1');
memoryButton1.addEventListener('click', function(){
    const memoryPrice = document.getElementById('memory-price');
    memoryPrice.innerText = '0';
    calculateTotal();
})
const memoryButton2 = document.getElementById('memory-btn2');
memoryButton2.addEventListener('click', function(){
    const memoryPrice = document.getElementById('memory-price');
    memoryPrice.innerText = '180';
    calculateTotal();
})

//storage button event handler and extra storage cost update
const storageButton1 = document.getElementById('storage-btn1');
storageButton1.addEventListener('click', function(){
    const storagePrice = document.getElementById('storage-price');
    storagePrice.innerText = '0';
    calculateTotal();
})
const storageButton2 = document.getElementById('storage-btn2');
storageButton2.addEventListener('click', function(){
    const storagePrice = document.getElementById('storage-price');
    storagePrice.innerText = '100';
    calculateTotal();
})
const storageButton3 = document.getElementById('storage-btn3');
storageButton3.addEventListener('click', function(){
    const storagePrice = document.getElementById('storage-price');
    storagePrice.innerText = '180';
    calculateTotal();
})

//delivery button even handler and delivery cost update
const deliveryButton1 = document.getElementById('delivery-btn1');
deliveryButton1.addEventListener('click', function(){
    const deliveryPrice = document.getElementById('delivery-price');
    deliveryPrice.innerText = '0';
    calculateTotal();
})
const deliveryButton2 = document.getElementById('delivery-btn2');
deliveryButton2.addEventListener('click', function(){
    const deliveryPrice = document.getElementById('delivery-price');
    deliveryPrice.innerText = '20';
    calculateTotal();
})

//total cost calculation
function calculateTotal(){
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-price').innerText;
    const storagePrice = document.getElementById('storage-price').innerText;
    const deliveryCharge = document.getElementById('delivery-price').innerText;
    const totalCost = parseInt(bestPrice) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryCharge);
    
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalCost;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = totalCost;
}
//promo code apply function and give discount 
function applyPromoCode(){
    const inputField = document.getElementById('input-field');
    const grandTotal = document.getElementById('grand-total');
    // promo code check condition 
    if(inputField.value == 'stevekaku'){
        grandTotal.innerText = grandTotal.innerText - parseFloat(grandTotal.innerText * (20/100));
    }
    inputField.value = '';
}

