//price input
let price = document.querySelector('.product-price');
//discount
let coupon = document.querySelector('#coupon');
//button
const buttonCalc = document.querySelector('.calc');
//p result
const pResult = document.querySelector('.result-container');

//escuchando el evento 
buttonCalc.addEventListener('click', calcularDescuento)

const arrayuObjeto = undefined;//["cupones": descuento]{}?

function calcularDescuento(){
    //obtenemos los value de los input
    let priceValue = price.value;
    let discountCoupon = coupon.value;

    if(!priceValue||!discountCoupon){
        pResult.innerText="Complete el formulario"
    }
    let discount;

    switch(discountCoupon){
        case "hoy30":
            discount = 30;
            break;
        case "hoy40":
            discount = 40;
            break;
        default:
            pResult.innerText="El cupon no es valido"
            return;
    }

    // if(discountCoupon =="hoy30"){
    //     discount = 30;
    // }else if(discountCoupon == "hoy40"){
    //     discount = 40;
    // }else{
    //     pResult.innerText="El cupon no es valido"
    // }
    //calculamos el descuento del producto
        const newPrice = (priceValue*(100-discount)/100);
        pResult.innerText= "El nuevo precio con Descuento es: $" + newPrice
    
}