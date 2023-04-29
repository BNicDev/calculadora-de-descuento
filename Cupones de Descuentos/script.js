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
let priceValue = price.value;
let discouncoupon = discount.value

for(var i = 0; i<cupones.length; i++){
    if(cupones[i]!= discouncoupon){
        pResult.innerText= "El cupon ingresado no es valido!"
    }else{
        switch(cupones){
            case cupones[0]:
                const newPrice = (priceValue*(100-30)/100);
                pResult.innerText= "El precio con el cupon es de : $" + newPrice;
                break;
            case cupones[1]:
            const newPrice1 = (priceValue*(100-40)/100);
            pResult.innerText= "El precio con el cupon es de : $" + newPrice1;
            break;
        }
    }
}
}

