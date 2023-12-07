export function getProduct(productId) {
    let matchingProduct;
  
    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });
  
    return matchingProduct;
  }
 export const products = [
    {   id:"00001-a",
        Image:"../Imgs/varapescarinfantil.jpg",
        name: "Combo Caña De Pescar Para Niños + Reel Silstar Mffr-bc",
        price:1845,
        category: "Cañas",
        keywords:[
            "Niños",
            "Cañas",
            "Reels",
            "Todos"
        ],
        descripcion:"Caña de pescar para niños de excelente calidad, con reel ideal para la primera vez."
   },
   
   {
    id:"00011-a",
    Image:"../Imgs/reel.jpg",
    name: "Reel Pesca Rotativo Abu García Ambassadeur 5500s 5.1:1 ",
    price:4500,
    category: "Reels",
    keywords:[
        "Reels",
        "Todos"
    ],
    descripcion:" Reel de pesca rotativo perfecto para tus aventuras "
   },
   {
    id:"00111-a",
    Image:"../Imgs/anzuelo-triple-pesca-hook-triple-bronce.avif",
    name: "ANZUELO TRIPLE PESCA HOOK TRIPLE BRONCE.1:1 ",
    price:500,
    category: "Anzuelos",
    keywords:[
        "Anzuelos",
        "Todos"
    ],
    descripcion:"Anzuelos Triple Hook de bronce, dureza y calidad de excelencia"
   },
   {
    id:"01111-a",
    Image:"../Imgs/BLISTER-TANZA-PARA-PEZCA-jpg",
    name: "Blister tanza para pesca x200 ",
    price:150,
    category: "Tanzas",
    keywords:[
        "Tanzas",
        "Todos"
    ],
    descripcion:"Blister Tanza para pesca 200 Metros, resistnete y versatil."
   },


];


