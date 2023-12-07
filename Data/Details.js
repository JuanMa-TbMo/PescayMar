import { products } from "./products.js";


export let details= JSON.parse(localStorage.getItem('details'));


export function saveToStorageDet(){
    localStorage.setItem('details', JSON.stringify(details));
  }
export function removeDetail(productId){
    const newDetail = [];
      details.forEach((detailsitem)=>{
        if (detailsitem.productId!==productId)
        newDetail.push(detailsitem);
      });
      details=newDetail;
      saveToStorageDet();
  };