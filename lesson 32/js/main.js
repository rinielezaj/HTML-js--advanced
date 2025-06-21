var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('teksti_id');


button.onclick = function(){
    text.innerHTML = input.value;
}


// var text = "The best school in the world is Digital School!";
// var result = text.search("Digital School");
// document.getElementById("result1").innerHTML = result;




// var text = "The best school in the world is Digital School!";
// var result = text.search(/Digital School/);
// document.getElementById("result2").innerHTML = result;



// var text = "The best school in the world is Digital School!";
// var result = text.replace(/Digital School/,"Another School");
// document.getElementById("result3").innerHTML = result;



// var text = "abcdef";
// var regex = new RegExp('abc')
// document.getElementById("result4").innerHTML = regex.test(text);



// var text = "My school is the best school in the world!";
// var regex = /school/g;
// document.getElementById("result5").innerHTML = text.match(regex);



// var text = "Digital School is the best school in the world!";
// var regex = /i/g;
// document.getElementById("result6").innerHTML = text.match(regex);



// var text = "Digital School is the best school in the world!";
// var regex = /[abc]/g;
// document.getElementById("result7").innerHTML = text.match(regex);



// var text = "Digital School is in top 10 best schools of the world!";
// var regex = /[0-9]/g;
// document.getElementById("result8").innerHTML = text.match(regex);




// var text = "My school is the best school in the world!";
// var regex = /(top|best|school)/g;
// document.getElementById("result9").innerHTML = text.match(regex);



// var text = "100 percent!";
// var regex = /\d/g;
// document.getElementById("result10").innerHTML = text.match(regex);



// var text = "My school is the best school in the world!";
// var regex = /\s/g;
// document.getElementById("result11").innerHTML = text.match(regex);

// var text = "Heeeey how are you";
// var regex = /e+/g;
// document.getElementById("result11").innerHTML = text.match(regex);

// var text = "so, i hope we'll see each other again soon...";
// var regex = /so*/g;
// document.getElementById("result11").innerHTML = text.match(regex);

// var text = "hey, hi, hiii!!!!";
// var regex = /hi?/g;
// document.getElementById("result11").innerHTML = text.match(regex);

// var text = "hellooo, hello, helooo!!";
// var regex = /o{3}/g;
// document.getElementById("result11").innerHTML = text.match(regex);

// var text = "hellooo, helloooooooooo, heloooo!!";
// var regex = /o{3,5}/g;
// document.getElementById("result11").innerHTML = text.match(regex);

// var text = "bestfriendsend, boyfriendsend, girlfriendsend";
// var regex = /send$/g;
// document.getElementById("result11").innerHTML = text.match(regex);

var text = "cat, catalog";
var regex = /^cat/g;
document.getElementById("result11").innerHTML = text.match(regex)