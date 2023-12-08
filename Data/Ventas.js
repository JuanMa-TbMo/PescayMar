import { products } from "./products.js";

export let ventas= JSON.parse(localStorage.getItem('ventas'));


ventas=
[
    {
        id:"00001-a",
        ventas:0,
    },
    {
        id:"00011-a",
        ventas:0,
    },
    {
        id:"00111-a",
        ventas:0,
    },
    { 
        id:"01111-a",
        ventas:0,
    },
  
];

export function saveToStorageVent(){
  localStorage.setItem('ventas', JSON.stringify(ventas));
}

export function AddSell(productId){
  
  ventas.forEach((Item)=>{
    if(Item.id===productId)
    Item.ventas++;
  });
  
  saveToStorageVent();
};
