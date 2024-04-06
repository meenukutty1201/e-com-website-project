 function check()
  {
    const show=document.getElementById("Show");
  if(show.type=='password')
  {
    show.type='text'
  }
  else
  {
    show.type='password'
  }
  
  }

function success()
 {
           var username = document.getElementById("inputtext").value;
            var password = document.getElementById("Show").value;

            
            if (username == "" || password == "") {
                alert("Please fill the Login fields");
               
            }

            else if(username == "veg@gmail.com" || password == "vegetable")
            { 
                alert("Login successfully");
                window.location.href="vegowner.html";  
            }   
            
            else if(username == "fruit@gmail.com" || password == "fruit")
            { 
                alert("Login successfully");
                window.location.href="fruitowner.html";  
            }   

            else if(username == "juice@gmail.com" || password == "juice")
            { 
                alert("Login successfully");
                window.location.href="juiceowner.html";  
            }   

            else if(username == "nuts@gmail.com" || password == "nuts")
            { 
                alert("Login successfully");
                window.location.href="nutsowner.html";  
            }   


            else
            {
                window.location.href="sellerlogin.html";  
              
            }
            
            
       }       
