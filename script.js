
/*
p = principal
r = rate
t = time or years

*/




function calculate() {

    //initialization
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("time").value;

    //simple interest formular
   simpleInterest = document.getElementById("answer").innerHTML = p * r * t;
    
    //return answer to 2 decimal places
   return parseFloat(simpleInterest).toFixed(2);
    
}

function cancel() {

    //assigning input values to null
    document.getElementById("principal").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("time").value = "";
    document.getElementById("answer").innerText = "";
}