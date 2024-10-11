function addColor(n){
    if (n>0){
        document.getElementById("counterValue").style.color="green";
    }
    else if(n<0){
        document.getElementById("counterValue").style.color="red";
    }
    else{
        document.getElementById("counterValue").style.color="black";
    }
}
let counterElement=document.getElementById("counterValue")
function onIncrement(){
    let pVal=counterElement.textContent
    let newElement=parseInt(pVal)+1;
    document.getElementById("counterValue").textContent=newElement;
    addColor(newElement)
}
function onDecrement(){
    let pVal=counterElement.textContent
    let newElement=parseInt(pVal)-1;
    document.getElementById("counterValue").textContent=newElement;
    addColor(newElement)
}
function onReset(){
    document.getElementById("counterValue").textContent=0;
    addColor(0)
}