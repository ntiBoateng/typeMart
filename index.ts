import products from './products'

const productName : string = "fanny pack";
const product = products.filter(product=>product.name === productName)[0]

console.log(product)
if(product.preOrder ===true){
  console.log("We will send you a message when the product is on its way.")
}

let shipping : number;
let taxPercent : number;
let taxTotal : number;
let total : number;

let shippingAddress : string =  '575 Broadway, New York City, New York';

if(product.price>=25){
  shipping=0;
  console.log("We will provide a free shipping")
}else{
  shipping=5;
  console.log("You will have to pay for the shipping.")
}

if(shippingAddress.match("New York")){
  taxPercent =0.1
}else{
  taxPercent = 0.05
}

taxTotal = product.price * taxPercent;
total = product.price+taxTotal;
console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);