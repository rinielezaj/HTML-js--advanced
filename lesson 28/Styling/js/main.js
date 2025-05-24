var butoni1 = document.getElementById('btn1')
var butoni2 = document.getElementById('btn2')
var text = document.getElementById('text')

butoni1.onclick = function(){
    text.style.color="red";
    text.style.backgroundColor="lightgrey";
    text.style.textAlign="center";
    text.style.fontSize="100px";
    text.style.padding="20px";

}

butoni2.onclick = function(){
    text.style.color="";
    text.style.backgroundColor="";
    text.style.textAlign="";
    text.style.fontSize="";
    text.style.padding="";

}

text.onmousemove = function(){
    text.style.cssText="color:red;background-color: lightblue;text-align:center;font-size:100px"
}

butoni1.onclick=function(){
    text.setAttribute('class', "test")
}
butoni2.onclick=function(){
    text.setAttribute('class', "test2")
}