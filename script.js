let firstValue, operator;
document.getElementById("one").addEventListener("click", oneFunction);
function oneFunction() {
    document.getElementById("screen").textContent+="1";
}
document.getElementById("two").addEventListener("click", twoFunction); 
function twoFunction() {
    document.getElementById("screen").textContent+="2";
}
document.getElementById("three").addEventListener("click", threeFunction); 
function threeFunction() {
    document.getElementById("screen").textContent+="3";
}

document.getElementById("plus").addEventListener("click", plusFunction); 
function plusFunction() {
    operator = "plus";
     firstValue = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent="";
}
document.getElementById("minus").addEventListener("click", minusFunction);
function minusFunction() {
    operator = "minus";
    firstValue = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent="";
}
document.getElementById("equals").addEventListener("click", equalsFunction); 
function equalsFunction() {
    if (operator == "plus") {
        document.getElementById("screen").textContent=parseInt(firstValue) + parseInt(document.getElementById("screen").textContent);
    } else {
        document.getElementById("screen").textContent=parseInt(firstValue) - parseInt(document.getElementById("screen").textContent);
    }
    
}

