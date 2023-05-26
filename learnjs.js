//function that calculates the area of a rectangle
function area(x,y){
document.writeln("the area of the rectangle is  "+(x*y)+"<br>")
}
area(2,5)
area(6,9)

//function to calculate the area of a circle
const a=3.142
function area_c(a,r){
    document.writeln("the area of the circle is  "+(a*r*r)+"<br>")
}
area_c(a,6)
area_c(a,7)
document.write("<br>","<br>")
//methods and objects

document.write("OBJECTS AND FUNCTIONS "+"<br>"+"<br>")
const student={fname:"Ruth",
lname:"Gitau",
age:19,
height:"5'4",
weight:65,
residence:"Kiambu",
greet:function(){document.write("Student's details")}
};
//accessing the properties of an object
//method 1
document.writeln("The student's height is "+student.height+"<br>")
//method 2 of accessing ptoperties of an object
document.writeln(student["fname"]+"  weighs  "+student["weight"]+"  kilograms"+"<br>")
student.greet()
document.write("<br>"+"<br>")

const employee={
    firstname:"Kimberly",
    lastname:"Maritim",
    position:"Supervisor",
    Experience:10,
};
//accessing methods
document.writeln("The employees name is"+employee.firstname+employee.lastname+"<br>"+"She has an experience of  "+employee.Experience+"  years in the industry"+"<br>   ")
document.write("works as a "+employee.position+"<br>")

document.write("<br>"+"<br>")