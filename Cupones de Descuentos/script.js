//price input
let price = document.querySelector('.product-price');
//discount
let discount = document.querySelector('.discount');
//button
const buttonCalc = document.querySelector('.calc');
//p result
const pResult = document.querySelector('.result-container')

//escuchando el evento 
buttonCalc.addEventListener('click', cuponDescuento)
const cupones =[
    "hoy30",
    "oferton40",
    "run",
    "michis",
 ]

function cuponDescuento(){
let priceValue = Number(price.value);
let discouncoupon = discount.value;

for(var i = 0; i<cupones.length; i++){
    if(cupones[0]==discouncoupon){
        const newPrice = (priceValue*(100-30)/100);
        pResult.innerText= "El precio con el cupon es de : $" + newPrice;
    }else if(cupones[1]==discouncoupon || cupones[2]==discouncoupon){
        const newPrice = (priceValue*(100-40)/100);
        pResult.innerText= "El precio con el cupon es de : $" + newPrice;
    }else if(cupones[3]==discouncoupon){
        const newPrice = (priceValue*(100-60)/100);
        pResult.innerText= "El precio con el cupon es de : $" + newPrice;
    }
    else{
        pResult.innerText= "El cupon ingresado no es valido";
    }
}

// let descuento;

//     switch(discouncoupon){
//         case "hoy30":
//             descuento = 30;
//             break;
//         case "oferton40":
//             descuento = 40;
//             break;
//         case "run":
//             descuento = 50;
//             break;
//         case "michis":
//             descuento = 60;
//             break;
//         default:
//             pResult.innerText= "El cupon ingresado no es valido";
// }
// const newPrice = (priceValue * (100 - descuento)) / 100;

// pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}
