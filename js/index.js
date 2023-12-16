window.addEventListener("scroll",ScrollMenu);

function ScrollMenu(){ 
 
    if( window.scrollY>1){
       document.getElementById("headerLogo").style.display = "none";
       document.getElementById("header").style.justifyContent="flex-end";
       document.getElementById("header").style.zIndex="2";
      
       
    } else{
        document.getElementById("headerLogo").style.display = "block";
        document.getElementById("header").style.justifyContent="";
       
    }
}