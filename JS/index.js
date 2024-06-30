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
