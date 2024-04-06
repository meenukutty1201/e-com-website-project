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
            
            else
            {
                alert("Login successfully");
                window.location.href="index.html";
              
            }
            
            
       }       
