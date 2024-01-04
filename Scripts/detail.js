import { ventas} from "../Data/Ventas.js";
import { products } from "../Data/products.js";
import { details,removeDetail,saveToStorageDet } from "../Data/Details.js";
import { cart,saveToStorage } from "../Data/cart.js";
    let matching;
    let totalSell;
const productContainer= document.querySelector('.container');
const productDes= document.querySelector('.descrip');
const gridContainer=document.querySelector('.products-grid');
const ulEL= document.querySelector("ul");
const btnEL=document.querySelector('.search-button');
const inputEL=document.querySelector('.Searchbar');

products.forEach((product) => {
    
    if (product.id === details.id){
        matching=product;
       
    };
});
ventas.forEach((Item)=>{
    if(Item.id===details.id){
        totalSell=Item;
    }
    
});

window.addEventListener("DOMContentLoaded",()=>{
    displayDataDet(matching);

});


function displayDataDet(product){
    let data=`  
    <div class="product-container">
        <div class="img-container">
           <img src="${product.Image}"  >
        </div>
        
        <div class="info-grid">
            <p class="title">${product.name}</p>
            <p class="price">$${product.price}</p>
            <div class="addDetail">
               <button class="addToCart js-add-to-cart " data-product-id="${product.id}" data-product-name"${product.name}">Añadir al Carrito</button>
              
              <div class="fav-icon">
                <img class="fav" 
                src="Imgs/fav.svg" alt=""></div>
            </div>
        </div>                
      </div>`
let Des=
`<div class="descrip"> <p>${product.descripcion}
</p> 

<h3>Unidades venidas: ${totalSell.ventas} </h3>
</div> `;


productContainer.innerHTML=data;
productDes.innerHTML=Des;
};

function displayDataW(products) {
    let displayData ='';
      products.forEach((cat_items) => {
    displayData+=
     ` <div class="product-container">
      <div class="img-container">
         <img src="${cat_items.Image}"  >
      </div>
      
      <div class="info-grid">
          <p class="title">${cat_items.name}</p>
          <p class="price">$${cat_items.price}</p>
          <div class="addDetail">
             <button class="addToCart js-add-to-cart " data-product-id="${cat_items.id}" data-product-name"${cat_items.name}">Añadir al Carrito</button>
            <p class="detail js-details" data-product-id="${cat_items.id}"> <a href="itemDetails.html"   
            >Detalles</a></p>
            
            <div class="fav-icon">
              <img class="fav" 
              src="../Imgs/fav.svg" alt=""></div>
          </div>
      </div>                
    </div>`;
    });
      
    gridContainer.innerHTML=displayData;
    };
    


window.addEventListener("DOMContentLoaded",()=>{
    displayDataW(products);
  
  
    const categories= products.reduce(function(values,item){
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;  
    },
    ["Todos"],
    );
    const categoryBtns= categories.map(function(category){
      return `<li><a href="#" data-id="${category}">${category}</a></li>`
    }).join("");
    ulEL.innerHTML= categoryBtns;
  
  
    const linksEL =document.querySelectorAll("li a");
  
  
    linksEL.forEach((links)=>{
      links.addEventListener("click", (e)=>{
        const category = e.target.dataset.id;
        const objCategory = products.filter(function(data) {
            if(data.category === category){
            return data;
          }
        })
          if (category === "Todos") {
            displayDataW(products);
          }
          else{
            displayDataW(objCategory);
    
          }
      });
    });
  
  btnEL.addEventListener('click', (e)=>{
    let searchValue = inputEL.value;
    if(searchValue!==""){
      let searchCategory = products.filter(function(data) {
        if(data.name.includes(searchValue)){
          return data
        }
        else if(data.category.includes(searchValue)){
          return data;}
      });
      
      if (searchCategory) {
        displayDataW(searchCategory);
      }
  
      inputEL.value ="";
    }
  });
  
  
  
  
    
   document.querySelectorAll('.js-details').forEach((Node)=>{
      Node.addEventListener('click',()=>{
  
        const prodID=Node.dataset.productId;
          if (details.id==="no detail") {
            details.id=prodID;
          }
          else if (prodID!==details.id) {
            removeDetail(); 
            details.id=prodID;        
          }
          saveToStorageDet();
        
  
      });
    
    });
  
    document.querySelectorAll('.js-add-to-cart').forEach((Node)=>{
      Node.addEventListener('click', ()=>{
        
        const prodID= Node.dataset.productId;
  let matchingP;
  console.log(prodID);
        cart.forEach((item)=>{
          if(prodID===item.productId){
            matchingP= item;
          }
        });
        if (matchingP){
          matchingP.quantity+=1;
        }
        else{
        cart.push({
          productId: prodID,
          quantity:1
        })
        }
          saveToStorage()
          
      let cartQuantity=0;
      cart.forEach((item)=>{
          cartQuantity+=item.quantity;
      });
  
        
      
      });        
    });
  });



