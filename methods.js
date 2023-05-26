const element=document.getElementById("one")
element.style.color="purple";
function display(){
    var chcolor=document.getElementById("btnblue");
    chcolor.style.background="yellow"
}
function changecolor(){
    let button=document.getElementById("btnyellow")
    let color=button.style.color;
    if(color=="blue"){
        button.style.color='green';
    }
    else{
        button.style.color='blue';
    }
}

let div=document.getElementById('btn');