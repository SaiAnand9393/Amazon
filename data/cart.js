 export let cart = JSON.parse(localStorage.getItem('cart'));
 
 if(!cart)
 {
  cart=[{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2
   },{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:4
   }];
 }
 
 

 function saveTostorage(){

  localStorage.setItem('cart',JSON.stringify(cart));

 }

 export function addTocart(productId){
  let matchingProduct;
        cart.forEach((item)=>{
              if(productId===item.productId)
              {matchingProduct=item;}

           

            });

              if(matchingProduct){
                matchingProduct.quantity +=1;
              }
              else
              {
                cart.push({
                  productId: productId,
                  quantity:1
                });
              }

              saveTostorage();
 };

 export function removeCartitem(productId){

let newcart=[];

  cart.forEach((cartitem)=> {

    if(productId!==cartitem.productId)
    {
      newcart.push(cartitem);
    }
   
  });

  cart=newcart;
  saveTostorage();
 }
