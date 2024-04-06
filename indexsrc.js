const buttoncart=document.querySelector('#cart-pic');
   const cart=document.querySelector('.cart1');
   const buttonclose=document.querySelector('#close-image');

   buttoncart.addEventListener('click',()=>{
      cart.classList.add('cart1-active');
   });

   buttonclose.addEventListener('click',()=>{
      cart.classList.remove('cart1-active');
   });


   document.addEventListener('DOMContentLoaded',loadVeg);

   function loadVeg()
   {
    loadContent();
   }

   function loadContent()
   {
       //remove vegetables from cart
       let cartremove=document.querySelectorAll('.remove-items');
       cartremove.forEach((button)=>{
        button.addEventListener('click',removeItem);
       });

       //quantity change
       let quantityEle=document.querySelectorAll('.quantity-cart');
       quantityEle.forEach((input)=>{
        input.addEventListener('change',qutyChange);
       });

       //products add to cart
       let buttonCart=document.querySelectorAll('.add-to-cart');
       console.log(buttonCart);
       buttonCart.forEach((butn)=>{
        butn.addEventListener('click',addCart);
       });

       totalCal();

   }

   //product removal
   function removeItem()
   {

      if(confirm('Are you sure to remove'))
      {
       console.log("click");
       let titlename=this.parentElement.querySelector('.product-title').innerHTML;
       console.log(titlename);
       listItem=listItem.filter(el=>el.titlename!=titlename);
      this.parentElement.remove();
      loadContent();

      }
   }

   //quantity change
   function qutyChange()
   {
     if(isNaN(this.value) || this.value<1)
     {
      this.value=1;
     }
     loadContent();
   }

   let listItem=[];

   //product add to cart
   function addCart()
   {
    
    let vegetable=this.parentElement;
    let titlename=vegetable.querySelector('.texttom').innerHTML;
    let price=vegetable.querySelector('.pricetom').innerHTML;
    let imgSrc=vegetable.querySelector('.veg-img').src;

    let productsInside={titlename,price,imgSrc}

    //product repetiton check
    if(listItem.find((el)=>el.titlename==productsInside.titlename))
    {
      alert("Product"+" "+titlename+"is already added");
      return
    }
    else
    {
      listItem.push(productsInside);
    }


    let newItem=createCartItem(titlename,price,imgSrc);
    let element=document.createElement('div');

    element.innerHTML=newItem;
    
    let cartAdd=document.querySelector('.cartcontent');
    cartAdd.append(element);
    loadContent()

   } 
   
   function createCartItem(titlename,price,imgSrc)
   {

     return `
     <div class="boxcart">
     <img src="${imgSrc}" class="cart-img">
     <div class="details">
      <div class="product-title">${titlename}</div>
      <div class="price-cart">
      <div class="cart-price">${price}</div>
      <div class="amt-cart">${price}</div>
     </div>
     <input type="number" value="1" class="quantity-cart">
     </div>
     <img src="delete.png" class="remove-items">
    </div>
    ` ;
   }


   function totalCal()
   {
     const itemsInCart=document.querySelectorAll('.boxcart');
     const totalAmt=document.querySelector('.total-price');


     let totals=0;
     itemsInCart.forEach(products=>{

      let elementOfPrice=products.querySelector('.cart-price');
      console.log(elementOfPrice);

      let prices=parseFloat(elementOfPrice.innerHTML.replace("Rs.",""));
      console.log(prices);
      let quantityOfProduct=products.querySelector('.quantity-cart').value;
      console.log(quantityOfProduct);

      totals+=(prices*quantityOfProduct);
      console.log(totals)
      products.querySelector('.amt-cart').innerText="Rs."+(prices*quantityOfProduct);

    
     });
     totalAmt.innerHTML='Rs.'+totals;

     //cart counting

     const countCart=document.querySelector('.cart-count');
     let counting=listItem.length;
     countCart.innerHTML=counting;
   
   
    if(counting==0)
    {
      countCart.style.display='none';
    }else{
      countCart.style.display='block';
    }
  }
  function placeorder()
    {
      var newItem1=document.querySelector('.boxcart');
      if(newItem1)
      {
        alert('Your order is placed');
      }

        if(!newItem1)
      {
        alert('your cart is empty');
      }

      
      
    }


    function payorder()
    {
      var newItem1=document.querySelector('.boxcart');
      if(newItem1)
      {
       payment();
      }

        if(!newItem1)
      {
        alert('your cart is empty');
      }

    }

    
    var payment1=document.getElementById("payment");
    function payment()
    {
      
      payment1.classList.add("show-popup");
      
    }

    function close()
    {
      
      payment1.classList.remove("show-popup");
      
    }
   
