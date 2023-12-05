import {cart, removeFromCart,saveToStorage} from '../Data/cart.js';

import { products,getProduct } from '../Data/products.js';

const container= document.querySelector('.content-container');

function displayDataC(products) {
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

    });
      
    container.innerHTML=displayData;
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
            displayDataC(cart); 
          }
          else if (matching.quantity=1){
          removeFromCart(matching.productId); 
          displayDataC(cart);
          }  
            saveToStorage();
        let cartQuantity=0;
        cart.forEach((item)=>{
            cartQuantity+=item.quantity;
        });
        
        });    
        
      });

    });
