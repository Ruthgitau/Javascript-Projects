
//creating variables in Javascript and assigning values
var f_name="Ruth"
var s_name="Muthoni"
var age = 14;
f_name="Janice" //reassigning a variable
document.write( "My name is "+ f_name+s_name +" I am" + age+ "years old")
document.write("<br>")
document.write("text from external javascript file")
document.write("<br>")
//alert box
alert("this is a pop up" )
let x=5
let y= 9
//for loops
for(i=1; i<5; i++) {
    document.write("hello javascript for loops"+"<br>")
}
 //AND operator returns true only if both expressions are true 
// Otherwise it returns false
let z=(x<y && y>x)
document.write("The output of the AND operater is "+z)
document.write("<br>")
//Logical OR operator returns true if either of the expression is true
// if neither of the expressions is true it returns false
let m=(x>y ||y>x)
document.write("The output of the OR operater is "+m)
document.write("<br>")
//logical NOT returns true for false statements and false for true statements
let r=!(x>y)
document.write("the output of the NOT operator is "+r)
document.write("<br>")

//if statement
if(age>18){
    document.write("Person is an adult")
}
//if...else statements
else{
    document.write("Person is a child")
}

//confirmation box
confirm("Are you okay?")

//prompt box
prompt()