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

//RNG
let rndnum;
roll= document.getElementById("roll");
dice= document.getElementById("dice");
roll.onclick = function (){
    rndnum =Math.floor(Math.random()*6)+1;
    dice.textContent= rndnum;
}
// checker
let mycheckbox=document.getElementById("mycheckbox");
let visabtn=document.getElementById("visabtn");
let mastercardbtn=document.getElementById("mastercardbtn");
let paypalbtn=document.getElementById("paypalbtn");
let subm=document.getElementById("subm");
let subresult=document.getElementById("subresult");
let paymentresult=document.getElementById("paymentresult");

subm.onclick= function(){
    if(mycheckbox.checked){
        subresult.textContent=`You are subscribed`;
    }
    else{
        subresult.textContent=`You are not subscribed`;
    }
    
    if(visabtn.checked){
        paymentresult.textContent=`You are using Visa`;
    }
    else if(mastercardbtn.checked){
        paymentresult.textContent=`You are using Mastercard`;
    }
    else if(paypalbtn.checked){
        paymentresult.textContent=`You are using Paypal`;
    }
    else{
        paymentresult.textContent=`You must select a payment type`;
    }
}
// CASE
let marks=document.getElementById("marks");
let graderes=document.getElementById("graderes");
let calgrade=document.getElementById("calgrade");
calgrade.onclick= function(){
let ma= marks.value;
switch(true){
    case ma>= 90:
    graderes.textContent= `You got A`;
    break;
    
    case ma>= 80:
    graderes.textContent= `You got B`;
    break;

    case ma>= 70:
    graderes.textContent= `You got C`;
    break;

    case ma>= 60:
    graderes.textContent= `You got D`;
    break;
    
    default:
    graderes.textContent= `You got F`;
}
}
