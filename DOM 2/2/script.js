var x = document.getElementById("heading")
console.log(x)

var y = document.getElementsByClassName("head")
console.log(y)

var z = document.getElementsByTagName("h1")
console.log(z)

x.style.color = "maroon";

var para = document.querySelector("p")
console.log(para)

para.style.backgroundColor = "pink";

var a = document.querySelector("h1~p")
a.style.backgroundColor = "brown";

var para = document.querySelectorAll("p")
para[3].style.backgroundColor = "brown";

