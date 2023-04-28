//price input
let price = document.querySelector('.product-price');
//discount
let discount = document.querySelector('.discount');
//button
const buttonCalc = document.querySelector('.calc');
//p result
const pResult = document.querySelector('.result-container')

//escuchando el evento 
buttonCalc.addEventListener('click', calcularDescuento)

function calcularDescuento(){
    //obtenemos los value de los input
    let priceValue = price.value;
    let discountValue = discount.value;
    //calculamos el descuento del producto
    if(discountValue>60){
        pResult.innerText="el valor de descuento es muy grande, no se puede realizar"
    }else{
        const newPrice = (priceValue*(100-discountValue)/100);
        pResult.innerText= "El nuevo precio con Descuento es: $" + newPrice
    }
}