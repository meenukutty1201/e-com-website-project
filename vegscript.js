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
              localStorage.setItem("price",price)
              console.log(price);
              alert(price)
             
              console.log( localStorage.getItem(price));            }


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
             <img src="assets/images/delete.png" class="remove-items">
            </div>
            ` ;
           
           }
           
           
           /*payment page*/
           function set()
           {
            let name=document.getElementById('namepay')
            name.innerHTML="hello";
           }
           
           

           function totalCal()
           {
             const itemsInCart=document.querySelectorAll('.boxcart');
             const totalAmt=document.querySelector('.total-price');


             let totals=0;
             itemsInCart.forEach(products=>{

              let elementOfPrice=products.querySelector('.cart-price');
              // 

              let prices=parseFloat(elementOfPrice.innerHTML.replace("Rs.",""));
              // console.log(prices);
              let quantityOfProduct=products.querySelector('.quantity-cart').value;
              console.log(quantityOfProduct);

              totals+=(prices*quantityOfProduct);
              // console.log(totals)
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
           

          // rating 
                 const stars = document.querySelectorAll(".stars i");
                 stars.forEach((star, index1) => {
                  star.addEventListener("click", () => {
                   stars.forEach((star, index2) => {
                     index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
      });
    });

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
       
       window.location.href="payment.html";
      }

        if(!newItem1)
      {
        alert('your cart is empty');
      }
      document.getElementById('price').innerHTML=localStorage.getItem("price")
      console.log('run');

    }

    
   
//first product
    function sub1()
    {
     let qty=document.querySelector('.veg-piece1');
     let amount=document.querySelector('.price-amt1');
      
     qty.innerHTML="1/2 kg";
     amount.innerHTML="75";

     }

     function defaultone()
     {
      let qty=document.querySelector('.veg-piece1');
     let amount=document.querySelector('.price-amt1');
      
     qty.innerHTML="1 kg";
     amount.innerHTML="150";
     }

     function add1()
     {
      let qty=document.querySelector('.veg-piece1');
     let amount=document.querySelector('.price-amt1');
      
     qty.innerHTML="1 1/2 kg";
     amount.innerHTML="200";
     }

    //second product
     function sub2()
     {
      let qty=document.querySelector('.veg-piece2');
     let amount=document.querySelector('.price-amt2');
      
     qty.innerHTML="1/2 pc";
     amount.innerHTML="10";
     }

     function defaulttwo()
     {
      let qty=document.querySelector('.veg-piece2');
     let amount=document.querySelector('.price-amt2');
      
     qty.innerHTML="1 pc";
     amount.innerHTML="25";
     }

     function add2()
     {
      let qty=document.querySelector('.veg-piece2');
     let amount=document.querySelector('.price-amt2');
      
     qty.innerHTML="2 pc";
     amount.innerHTML="35";
     }

    //third product
    
    function sub3()
     {
      let qty=document.querySelector('.veg-piece3');
     let amount=document.querySelector('.price-amt3');
      
     qty.innerHTML="1/2 kg";
     amount.innerHTML="60";
     }


     function defaultthree()
     {
      let qty=document.querySelector('.veg-piece3');
     let amount=document.querySelector('.price-amt3');
      
     qty.innerHTML="1 kg";
     amount.innerHTML="120";
     }

     function add3()
     {
      let qty=document.querySelector('.veg-piece3');
     let amount=document.querySelector('.price-amt3');
      
     qty.innerHTML="2 kg";
     amount.innerHTML="230";
     }
