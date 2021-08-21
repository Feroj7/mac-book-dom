// memory button event handler and extra memory cost update
const memoryPrice = document.getElementById('memory-price');
document.getElementById('memory-btn1').addEventListener('click', function(){
    memoryPrice.innerText = '0';
    calculateTotal();
})
document.getElementById('memory-btn2').addEventListener('click', function(){
    memoryPrice.innerText = '180';
    calculateTotal();
})

//storage button event handler and extra storage cost update
const storagePrice = document.getElementById('storage-price');
document.getElementById('storage-btn1').addEventListener('click', function(){
    storagePrice.innerText = '0';
    calculateTotal();
})
document.getElementById('storage-btn2').addEventListener('click', function(){
    storagePrice.innerText = '100';
    calculateTotal();
})
document.getElementById('storage-btn3').addEventListener('click', function(){
    storagePrice.innerText = '180';
    calculateTotal();
})

// delivery button event handler and delivery cost update
const deliveryCost = document.getElementById('delivery-cost');
document.getElementById('delivery-btn1').addEventListener('click', function(){
    deliveryCost.innerText = '0';
    calculateTotal();
})
document.getElementById('delivery-btn2').addEventListener('click', function(){
    deliveryCost.innerText = '20';
    calculateTotal();
})

//total cost calculation
function calculateTotal(){
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-price').innerText;
    const storagePrice = document.getElementById('storage-price').innerText;
    const deliveryCharge = document.getElementById('delivery-cost').innerText;
    //calculate total cost
    const totalCost = parseInt(bestPrice) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryCharge);
    //update in UI
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalCost;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = totalCost;
}

//promo code apply function and give discount 
function applyPromoCode(){
    const inputField = document.getElementById('input-field');
    const totalPrice = document.getElementById('total-price');
    const grandTotal = document.getElementById('grand-total');
    // promo code check condition 
    if(inputField.value == 'stevekaku'){
        grandTotal.innerText = totalPrice.innerText - parseFloat(totalPrice.innerText * (20/100));
    }
    //clear promo code input field
    inputField.value = '';
}

