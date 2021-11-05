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
    } else if(operator=="minus") {
        document.getElementById("screen").textContent=parseInt(firstValue) - parseInt(document.getElementById("screen").textContent);
    } else if (operator == "point") {
        function pointFunction() {
            let secondValue = document.getElementById("screen").textContent;
            if (b === 1) {
                console.log(firstValue);
                console.log(parseInt(firstValue));
                console.log(secondValue)
                document.getElementById("screen").textContent = parseFloat(firstValue) - parseFloat(secondValue);
                b = 0;
            } else if (b === 2) {
                console.log(firstValue);
                console.log(parseInt(firstValue));
                console.log(secondValue)

                document.getElementById("screen").textContent = parseFloat(firstValue) * parseFloat(secondValue);
                b = 0;
            } else if (b === -2) {
                console.log(firstValue);
                console.log(parseInt(firstValue));
                console.log(secondValue)

                document.getElementById("screen").textContent = parseFloat(firstValue) / parseFloat(secondValue);
                b = 0;
            } else if (b === -1) {
                console.log(firstValue);
                console.log(parseInt(firstValue));
                console.log(secondValue)

                document.getElementById("screen").textContent = parseFloat(firstValue) + parseFloat(secondValue);
                b = 0;
            }
 
        }
        
    }
    pointFunction()
}

document.getElementById("zero").addEventListener("click", zeroFunction); 
function zeroFunction() {
    document.getElementById("screen").textContent+="0";
}
document.getElementById("four").addEventListener("click", fourFunction); 
function fourFunction() {
    document.getElementById("screen").textContent+="4";
}
document.getElementById("fife").addEventListener("click", fifeFunction); 
function fifeFunction() {
    document.getElementById("screen").textContent+="5";
}
document.getElementById("six").addEventListener("click", sixFunction); 
function sixFunction() {
    document.getElementById("screen").textContent+="6";
}
document.getElementById("seven").addEventListener("click", sevenFunction); 
function sevenFunction() {
    document.getElementById("screen").textContent+="7";
}
document.getElementById("eit").addEventListener("click", eitFunction); 
function eitFunction() {
    document.getElementById("screen").textContent+="8";
}
document.getElementById("nine").addEventListener("click", nineFunction); 
function nineFunction() {
    document.getElementById("screen").textContent+="9";
}
document.getElementById("point").addEventListener("click", pointFunction); 
function pointFunction() {
    operator = "point"
    document.getElementById("screen").textContent += ".";
}