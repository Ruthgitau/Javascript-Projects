document.getElementById("btn").style.backgroundColor="blue";
document.getElementById("btn").style.color="white";
var p=document.getElementById("btn")
p.addEventListener("click",myfunction)
p.addEventListener("mouseover",secondfunction)
function myfunction(){
    p.style.color="brown";
    p.style.backgroundColor="white"
}
function secondfunction(){
    p.innerHTML="mouse hovered";
}
function thirdfunction(){
    alert("Successfully submitted");
}
function dblfunction(){
    document.getElementById("mybtn2").innerText="double clicked";
    document.getElementById("mybtn2").style.color=" green";

}
function loadfunction(){
    alert("page is loaded");
}





function verifypassword(){
    let p =document.getElementById("p").value;
    if(p ==""){
        alert("password cannot be empty");
        return false;
    }

}