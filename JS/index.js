//console.log('Hello');
//console.log("I like pizza")
document.getElementById("myH1").textContent= 'Hello';
document.getElementById("myP").textContent="I like pizza";
//window.alert('This is an alert');
//window.alert('i like pizza');
let fulln= "Aayush";
let age= 19;
let student= true;

document.getElementById("p1").textContent = `your name is ${fulln}`;
document.getElementById("p2").textContent = `you are ${age} years old`;
document.getElementById("p3").textContent = `enrolled: ${student}`;

document.getElementById("mySubmit").onclick = function(){
    username=document.getElementById("myText").value;
    console.log(username);
    document.getElementById("changeH1").textContent = `hello ${username}`;
}

const PI= 3.14159;
let radius;
let circumference;

document.getElementById("calc").onclick = function(){
    radius= document.getElementById("rad").value;
    circumference= 2*PI*radius;
    document.getElementById("resu").textContent= `${circumference} cm`;
}

const decreasebtn = document.getElementById("decreasebtn"); 
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const counterlabel= document.getElementById("counterlabel");
let count=0;
 
increasebtn.onclick = function(){
    count++;
    counterlabel.textContent= count;
}
decreasebtn.onclick = function(){
    count--;
    counterlabel.textContent= count;
} 
resetbtn.onclick = function(){
    count=0;
    counterlabel.textContent= count;
}  
