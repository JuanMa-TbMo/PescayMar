import { products } from "./products.js";




export let details= JSON.parse(localStorage.getItem('details'));

if (!details) {
  details={id:"no detail"}
}
export function saveToStorageDet(){
    localStorage.setItem('details', JSON.stringify(details));
  }
export function removeDetail(productId){
    details.id="no detail";
      saveToStorageDet();
  };