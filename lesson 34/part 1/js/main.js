// function printNames(){
//     document.write("Liza");
        
//     document.write("Dua");
//     setTimeout(
//         function(){
//             document.write("Rini");
//         },3000
//     );

//     document.write("<br>");
//     document.write("Ylli");
// }

// printNames()




var colors = ['red','green','purple','blue'];


function changeBgColor(){
    document.querySelector('body').style.background=
    colors[Math.floor(Math.random()*colors.length)]
}
setInterval(changeBgColor,1000)




var names = ['Dua','Liza','Rini','Ylli'];


function changeNames(){
    document.querySelector('h1').innerHTML=
    names[Math.floor(Math.random()*names.length)]
}
setInterval(changeNames,1000)