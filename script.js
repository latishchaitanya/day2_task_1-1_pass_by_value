function program1()
{
var varOne= document.getElementById("value1").value;
var varTwo= document.getElementById("value2").value;
callByValue(varOne,varTwo) 
document.write("After Swapping using ");
document.write("<br>");
document.write("Call By Value");
document.write("<br>");
document.write("Number 1 :" + varTwo );
document.write("<br>");
document.write("Number 2 :" +varOne);
document.write("<br>");
function callByValue(x, y) { 
    console.log("PASS BY VALUE");
    console.log("\n");
    console.log("Before Swapping"); 
    console.log("VALUE1 =" + varOne +" VALUE2 =" +varTwo); 
    let temp;
    temp=x;
    x=y;
    y=temp

    console.log("\nAfter Swapping "); 
    console.log("VALUE1 =" + x +" VALUE2 =" +y); 
    
  } 
console.log("\n")

}

