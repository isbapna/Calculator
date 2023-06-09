function appendValue(value){
    document.getElementById("display").value+=value;
}
function clearDisplay(){
    document.getElementById("display").value="";
}
function performCalculation(){
    const expression=document.getElementById("display").value;
    const result=eval(expression);
    document.getElementById("display").value=result;
}
