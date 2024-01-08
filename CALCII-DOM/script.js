function add(){
    let number1 = parseFloat(document.getElementById("numb1").value);
    let number2 = parseFloat(document.getElementById("numb2").value);
    
    let sum = (number1 + number2);
    document.getElementById("rst").innerText = "The result is " + sum;
}

function sub(){
    let number1 = parseFloat(document.getElementById("numb1").value);
    let number2 = parseFloat(document.getElementById("numb2").value);
    
    let subtraction = (number1 - number2);
    document.getElementById("rst").innerText = "The result is " + subtraction;
}

function multi(){
    let number1 = parseFloat(document.getElementById("numb1").value);
    let number2 = parseFloat(document.getElementById("numb2").value);
    
    let multiplication = (number1 * number2);
    document.getElementById("rst").innerText = "The result is " + multiplication;
}

function div(){
    let number1 = parseFloat(document.getElementById("numb1").value);
    let number2 = parseFloat(document.getElementById("numb2").value);
    
    let division = (number1 / number2);
    document.getElementById("rst").innerText = "The result is " + division;
}

function reset(){
    let number1 = parseFloat(document.getElementById("numb1").value);
    let number2 = parseFloat(document.getElementById("numb2").value);
    
    document.getElementById("rst").innerText = "";
}