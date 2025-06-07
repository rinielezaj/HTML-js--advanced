// var x = -2;


// if(x>2){
//     console.log("x eshte vlere me e madhe sesa 2")
// }else if(x>-3){
//     console.log("x eshte vlere me e madhe sesa -3")
// }
// else{
//     console.log("asnje kusht nuk eshte plotesuar")
// }



// var age=21


// if(age>21){
//     console.log("pass")
// }else if(age==20){
//     console.log ("lejohesh")
// }else if(age<21){
//     console.log("not allowed")
// }else{
//     console.log("asnje kush nuk plotesohet")
// }

    var input = document.getElementById("input_id");
    var button = document.getElementById("btn_id");
    var text = document.getElementById("text_id");
    
    // button.onclick=function(){
    //     text.innerHTML=input.value;
    // }
    

    var input1 = document.getElementById("input1_id");
    var input2 = document.getElementById("input2_id");
    var button2 = document.getElementById("btn2_id");
    var ans = document.getElementById("answer");


    button2.addEventListener("click",function(){
        ans.innerHTML = parseInt(input1.value)+parseInt(input2.value);
    });


    button.onclick =function(){
     if(input.value>10){
        text.innerHTML="input value is greater than 10"
     }
     else if(input.value<10){
        text.innerHTML="input value is smaller than 10"
     }
    }