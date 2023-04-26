//price input
let price = document.querySelector('.product-price');
//discount
let discount = document.querySelector('.discount');
//button
const buttonCalc = document.querySelector('.calc');

//tomamos los values 
let priceValue = price.value;
let discountValue = discount.value;

//escuchando el evento 
buttonCalc.addEventListener('click', calcularDescuento)

function calcularDescuento(){
    console.log(priceValue);
    console.log(discountValue);
}