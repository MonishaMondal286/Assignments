var x = document.getElementsByClassName("heading")
//console.log(x[0])
//console.log(x[1])
//instead of printing output 2 times we will use for loop

for(let i=0;i<x.length;i++){
    console.log(x[i])
}
x.style.backgroundColor = "maroon";

//selecting with tags
var para = document.getElementsByTagName("p")
//console.log(y)
//para.style.backgroundColor = "maroon";
//para.style.fontSize = "30px";