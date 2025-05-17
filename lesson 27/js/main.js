function showMessage(){
    alert("This message is inside the function")
}

function showMessagetwo(){
    console.log("hello there")
}

// showMessage()
// showMessagetwo()
// showMessagetwo()
// showMessagetwo()


function mbledhje(number1,number2){
    return number1 + number2
}

console.log( mbledhje(100,3))

function toCelcius(f){
    return (5/9)* (f-32);
}

console.log("60 fahrenheit is equal to " + toCelcius(60)+ " celcius")

function toSeconds(minutes){
    return minutes*60;
}

console.log("shnderrimi i minutave ne sekonda " + toSeconds(60))

function triangleArea(base,height){
    return 0.5 *base*height
}

console.log(triangleArea(5,7))

function sum(number1,number2){
    return number1 + number2
}

console.log(sum(100,3))

function difference(number1,number2){
    return number1 - number2
}

console.log(difference(100,3))

function product(number1,number2){
    return number1 * number2
}

console.log(product(100,3))

function quotient(number1,number2){
    return number1 / number2
}

console.log(quotient(100,3))

var car={
    name:"Mercedes",
    color:"red",
    year:2020,
    kilometres:100,


    startEngine: function(){
        alert("Vrooom")
    },

    get getKilometres(){
        return this.kilometres
    },
    get getName(){
        return this.name
    }
}

console.log(car.getName)
console.log(car.getKilometres)

alert(car.name)
alert(car.year)


var computer = new Object();

computer.name ="ASUS ROG";
computer.CPU ="Intel Core i9";
computer.RAM ="64GB DDR5";

computer.type = function(){
    return this.name + ", " + this.CPU + ", " + this.RAM;
}

alert(computer.type())

function Computer(name, CPU, RAM){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;

}


var computer1=new Computer("MacBook Pro","M1 8 Core","8GB RAM")
var computer2=new Computer("Alienware","Intel Core i9","48GB RAM")

console.log(computer1.name)