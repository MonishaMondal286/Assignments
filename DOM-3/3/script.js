let head = document.createElement("h1")
let heading = document.createElement("h1")
let btn = document.createElement("button")


head.innerText = "I am an aspiring developer"
heading.innerText = "Microsoft"
btn.innerText = "Submit"
btn.setAttribute("id", "container");


document.querySelector("body").append(head)
document.querySelector("body").append(heading)
document.querySelector("body").append(btn)
//btn.style.backgroundColor = "teal"


//since the above method is comple 
// we can also use setAttribute

