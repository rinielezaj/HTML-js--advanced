var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("teksti_id");


button.onclick = function(){
    text.innerHTML = input.value;
}

// var teksti1 ="The best school in the world is Digital School";
// var result = teksti1.search("Digital School");
// document.getElementById("results1").innerHTML=result;

// var teksti1 ="The best school in the world is Digital School";
// var result = teksti1.replace(/Digital School/,"Another school");
// document.getElementById("results2").innerHTML=result;

// var teksti1 ="The best school in the world is Digital School";
// var result = teksti1.search(/Digital School/);
// document.getElementById("results3").innerHTML=result;



// var teksti1 ="abcdef";

// var result =  new RegExp('abc')

// document.getElementById("results4").innerHTML=result.test(teksti1)


// var teksti1 ="My school is the best school in the world";
// var ckaMeBeSearch =  /school/g

// document.getElementById("results5").innerHTML=teksti1.match(ckaMeBeSearch)

// var teksti1 ="My school is the best school in the world";
// var ckaMeBeSearch =  /i/g
// document.getElementById("results6").innerHTML=teksti1.match(ckaMeBeSearch)


// var teksti1 ="My school is the best school in the world";
// var ckaMeBeSearch =  /[abc]/g
// document.getElementById("results7").innerHTML=teksti1.match(ckaMeBeSearch)

// var teksti1 ="My school is top 10 in the world";
// var ckaMeBeSearch =  /[0-9]/g
// document.getElementById("results8").innerHTML=teksti1.match(ckaMeBeSearch)


// var teksti1 ="My school is top  the best in the world";
// var ckaMeBeSearch =  /(top|best|world)/g
// document.getElementById("results9").innerHTML=teksti1.match(ckaMeBeSearch)

// var teksti1 ="100 percent";
// var ckaMeBeSearch =  /\d/g
// document.getElementById("results10").innerHTML=teksti1.match(ckaMeBeSearch)

var teksti1 ="My school is top  the best in the world";
var ckaMeBeSearch =  /\s/g
document.getElementById("results10").innerHTML=teksti1.match(ckaMeBeSearch)