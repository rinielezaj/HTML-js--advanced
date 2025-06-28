// var circle = document.getElementById("circle");
// var showTime = document.getElementById("time");
// var timeStart = new Date().getTime;



// function showCircle(){
//     circle.style.display='block';
//     circle.style.top= Math.random()*500+"px";
//     circle.style.left= Math.random()*500+"px";
//     timeStart = new Date().getTime;


// }

// showCircle()


// circle.onclick = function(){
//     circle.style.display='none';
//     setInterval(showCircle,1000)

//     var timeEnd =new Date().getTime();
//     var time = (timeEnd-timeStart)/1000;

//     showTime.innerHTML = time + "s"

// }

var circle1 = document.getElementById("circle1");

var colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange']


circle1.onclick = function(){
    var randomColor = colors[Math.floor(Math.random()*colors.length)];
    circle1.style.color = randomColor;
}