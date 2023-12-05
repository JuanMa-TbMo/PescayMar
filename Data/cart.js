import { products } from "./products.js";


export let cart= JSON.parse(localStorage.getItem('cart'));


if(!cart) cart=
[{
  productId:"00001-a",
  quantity:1
},

];

export function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function removeFromCart(productId){
  const newCart = [];
  
  cart.forEach((cartItem)=>{
    if(cartItem.productId!==productId)
    newCart.push(cartItem);
  });
  cart=newCart;
  saveToStorage();
};