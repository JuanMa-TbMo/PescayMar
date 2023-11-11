import { products } from "../Data/products.js";

const productContainer=document.querySelector('.products-grid');

const ulEL= document.querySelector("ul");
const btnEL=document.querySelector('.search-button');
const inputEL=document.querySelector('.Searchbar');

function displayDataW(products) {

let displayData =products.map(function(cat_items){
  return ` <div class="product-container">
  <div class="img-container">
     <img src="${cat_items.Image}"  >
  </div>
  
  <div class="info-grid">
      <p class="title">${cat_items.name}</p>
      <p class="price">$${cat_items.price}</p>
      <div class="addDetail">
          <button class="addToCart">Añadir al Carrito</button>
        <p class="detail">  <a href="itemDetails.html">Detalles</a></p>
        
        <div class="fav-icon">
          <img class="fav" 
          src="../Imgs/fav.svg" alt=""></div>
      </div>
  </div>                
</div>`;
});

displayData=displayData.join("");
productContainer.innerHTML=displayData;
}


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