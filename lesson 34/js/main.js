// function printNames() {
//     document.write("John");
//     document.write("<br>");
//     setTimeout(function() { document.write("Ana");},3000);
//     document.write("Bob");
// }

// printNames();

// var colors=['red','green','blue','purple'];

// function changeBgColor() {
//     document.querySelector("body").style.background=colors[Math.floor(Math.random()*colors.length)] 
// }

// var names=["John","Ana","Bob","Mark"];

// function changeNames(){
//     document.querySelector("p").innerHTML=names[Math.floor(Math.random()*names.length)];
// }

// setInterval(changeBgColor,1000);
// setInterval(changeNames,1000);

var circle=document.getElementById("circle");
var showTime=document.getElementById("time");
var timestart=new Date().getTime();

function showCircle() {
    circle.style.display="block";
    circle.style.top=Math.random()*500+"px";
    circle.style.left=Math.random()*900+"px";
    circle.style.backgroundColor=randomColor();
    timestart=new Date().getTime();
}

showCircle();

circle.onclick=function() {
    circle.style.display="none";
    setTimeout(showCircle,1000);
    var timeEnd=new Date().getTime();
    var time=(timeEnd-timestart)/1000;
    showTime.innerHTML=time+"s";
}

function randomColor() {
    var s="0123456789ABCDEF";
    var color="#";

    for (var i=0;i<6;i++){
        color=color+s[Math.floor(Math.randomS() * 16)];
    }

    return color;
}