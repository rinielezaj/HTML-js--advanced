// var input=document.getElementById("input_id");
var button=document.getElementById("btn_id");
var text=document.getElementById("text_id");

// button.onclick=function() {
//     text.innerHTML=input.value;
// }

// var input=document.querySelector("#input_id");
// var input2=document.querySelector(".input2_id");

// button.addEventListener('click',function(){
//     // text.innerHTML=input.value+ ' ' +input2.value;
//     text.innerHTML=parseInt(input.value)+parseInt(input2.value);
// })

var text="The best school in the world is Digital School";
// var result=text.search("Digital School");
var result=text.search(/Digital School/);
document.getElementById('result1').innerHTML=result;

var text="The best school in the world is Digital School";
var result=text.replace(/Digital School/, "Sami Frasheri");
document.getElementById("result2").innerHTML=result;

var text="abcdef";
var regex=new RegExp('abc');
document.getElementById('result3').innerHTML=regex.test(text);

var text="My school is the best school in the world!";
var regex=/school/g;
document.getElementById("result4").innerHTML=text.match(regex);

// var text="My schooooooool is in the top 10 best schools in the world!";
// var regex=/i/g;
// var regex=/[abc]/g;
// var regex=/[0-9]/g;
// var regex=/(top|best|school)/g;
// var regex=/\d/g;
// var regex=/\s/g;
// var regex=/o+/g;
// var regex=/cho*/g;
// var regex=/o{3}/g;
// var text="hello,helloo,hellooo,helloooo,hellooooo"
// var regex=/o{3,5}/g;

var text="bestfriend,boyfriend,girlfriend";
var regex=/end$/g;

document.getElementById("result5").innerHTML=text.match(regex);

