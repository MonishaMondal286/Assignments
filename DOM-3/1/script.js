document.querySelector("button").addEventListener("click", linkFunction())
function linkFunction(){
   var name=document.querySelector("#user").innerText
   var mobile_no =document.querySelector("mobile").innerText

   document.querySelector("h1").innerText = name
   document.querySelector("h2").innerText = mobile_no

}
