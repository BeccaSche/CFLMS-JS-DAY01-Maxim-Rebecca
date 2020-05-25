//Basic Exercise 1
/*console.log("Hello from the Console")
document.write("Hello frome the Browser")

//Basic Exercise 2 + 3
//console.log("Hi my name is Martin")
var age = 'and I am 25 years old'
console.log (name, age)

//Basic Exercise 4
var Team = ["Martin", "Thomas", "Peter", "Mathias", "Niki"]
var bestPlayer = ("The mostvaluable player of the match is")
console.log(bestPlayer, Team[4])

//Intermediate Exercise 1
var cars = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari'];
console.log(cars.sort());

//Intermediate Exercise 2
// Part 1
var fruite = ["apple", "banana", "kiwi"];
fruite.splice(3,0, "orange")
console.log(fruite)
console.log(fruite.slice(0,3,))
// Part 2
var animals = ['monkey', 'horse', 'dog'];
animals.splice(0,0, "cat");
console.log(animals.sort());
console.log(animals.join('\n'));

//Intermediat Exercise 3
document.write(“mango" </br> "cherries" </br> "kiwi" </br> "grapes" </br> "pear" </br> "peach" </br> "orange" </br> "lemon”)

//Advanced Exercise 1
var a = 7;
var b = 14;
var c = 21;
var d = 36;
var e = 42;

var result = a + b + c + d + e;
console.log(result)

var f = 1;
var g = 15;
var h = 8;
var i = 1;

var result2 = f * g * h * i
console.log(result2)

var result3 = (result / result2)
console.log(result3)

//Advanced Exercise 2
numbers = [ 
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27],
[7, 4, 28, 14], 
[3, 10, 25, 7], 
[21, 4, 6, 17], 
[3, 5, 26, 3] ];

console.log(numbers[1][1]);
console.log(numbers[4][2]);
console.log(numbers[5][3]);
console.log(numbers[2][3]);
console.log(numbers[2][1]);

//Challenge Exercise 1

var vienna = [[“Vienna”, “is”, “a”, “nice”, “city”],
[“Vienna”, “is”, “a”, “nice”, “city”],
[“Vienna”, “is”, “a”, “nice”, “city”],
[“Vienna”, “is”, “a”, “nice”, “city”],
[“Vienna”, “is”, “a”, “nice”, “city”]];

console.log(vienna[0][0] + ” ” + vienna[1][1] + ” ” + vienna[2][2] + ” ” + vienna[3][3] + ” ” + vienna[4][4]);
*/
//Challenge Exercise 2

var string =`Properties,$a$set$of$immutable$values,$are$passed$to$a$component’s$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism’s$promise$is$expressed$as$“properties $flow$down;$actions$flow$up”.`;

var text = string.split(‘$’);
console.log(text);
console.log(text.join(” “));