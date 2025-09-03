// var a = 10;
// var b = 12;
// var rez = a + b;
// console.log(rez);

// var x = 13;
// var z = 17;
// var rez1 = x * z;
// console.log(rez1);

// var n = 99;
// n++;
// console.log(n);

// var o = 101;
// o--;
// console.log(o);

// var v = 10;
// var w = 10;
// console.log( v == w);

// var t = 15;
// var u = 15;
// console.log(t != u);

// function showMessage() {

// 	alert("Test");

// }

// showMessage();

// function sum(num1,num2){
// 	return num1 + num2;
// }

// console.log(sum(25,25));

// function toseconds(minutes){
// 	return minutes * 60;

// }

// console.log(toseconds(15));

// function siperfaqja(a,h){
// 	return 0.5 * a * h

// }

// console.log(siperfaqja(15,20));

// var school = {
// 	name:"Digital School",
// 	subject:"Programming",
// 	students:"2000",
// 	year:2016
// };

// alert(school.name);

// var car = {
// 	name:"Mercedes",
// 	color:"red",
// 	start: function(){
// 		alert("Start");
// 	}
// } 


var button1 = document.getElementById("btn1");
var text1 = document.getElementById("text");

// button1.onclick = function() {
// 	alert("Hello");
// }

// button1.onclick = function() {
// 	text1.style.color = "red";
// 	text1.style.background = "blue";
// 	text1.style.textAlign = "center";
// 	text1.style.fontSize = "100px";
// 	text1.style.padding = "20 px";

// }

button1.onclick = function () {
	text1.setAttribute("class","test");
}