import {cart, removeFromCart,saveToStorage} from '../Data/cart.js';

import { products,getProduct } from '../Data/products.js';
const checkout=document.querySelector('.js-checkout'); 
const container= document.querySelector('.content-container');
 let precio=0;
 let prods=0;
 

function displayDataC(products) { 
    let info='';
    let displayData ='';
      products.forEach((cart_items) => {
        const productId=cart_items.productId
        let matching=getProduct(productId);
    displayData+=
     ` <div class="product-container js-container data-product-id=${matching.id}">
     <img class="img-container" src=${matching.Image}>
     <div class="info-grid" >
         <p class="title">${matching.name}</p>
         <p class="price">$${matching.price}</p>
         <p class="quantity">Cantidad actual: ${cart_items.quantity}</p>
         <div class="addDetail">
             <button class="remToCart js-rem-from-cart" data-product-id=${matching.id} > Remover del Carrito</button>
           <div class="fav-icon">
             <img class="fav" 
             src="../Imgs/fav.svg"></div>
           </div>
     </div>            
 </div>`;


  precio+=matching.price;
  prods+=cart_items.quantity;

 });
 let iva=(precio*22)/100;
 let total=iva+precio;
info=`
<div class="info-grid ">
<p>Productos: ${prods} </p>
 <p>Precio Total: $${Math.trunc(precio)} </p>
 <p>Iva 22%: $${Math.trunc(iva)} </p>
 <p>Total a Pagar: $${Math.trunc(total)}</p> 
 <button class="remToCart"> Comprar</button>
 </div>`;
    console.log(info);
    container.innerHTML=displayData;
    console.log(checkout);
    checkout.innerHTML=info;
    
    };






    window.addEventListener("DOMContentLoaded",()=>{
      displayDataC(cart);

      document.querySelectorAll('.js-rem-from-cart').forEach((Node)=>{ 
         
        Node.addEventListener('click', ()=>{ 
          const prodID= Node.dataset.productId;
    let matching;
    
          cart.forEach((item)=>{
            if(prodID===item.productId){
              matching= item;
            }
          });
          if (matching&&matching.quantity>1){
            matching.quantity-=1;  
           
          }
          else if (matching.quantity=1){
          removeFromCart(matching.productId); 
          displayDataC(cart);  
       
          }  
            saveToStorage();
        let cartQuantity=0;
        cart.forEach((item)=>{
            cartQuantity+=item.quantity; 
            displayDataC(cart);  
        });
         
        });    
    
      });

    });
