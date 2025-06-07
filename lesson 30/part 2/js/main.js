var wakeuptime;
var dstime;
var sleeptime
var noon =12



function showCurrentTime(){
    var clock = document.getElementById("clock");
    var showCurrentTime = new Date();

    var hours = showCurrentTime.getHours();
    var minutes = showCurrentTime.getMinutes();
    var seconds = showCurrentTime.getSeconds();

    var meridian="AM";


    if(hours>=noon){
        meridian ="PM"
    }

    var clockTime = hours + ":" + minutes + ":" + seconds+" "+ meridian;

    clock.innerText = clockTime;

}


setInterval(showCurrentTime,1000)