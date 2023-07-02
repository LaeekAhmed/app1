let msg = "hello world";
let msg2;
let msg3 = null;
const pi = 3.14;
var x = 10; // don't use `var` please

console.log(msg);
console.log(msg2) // undefined

// let pay_but = document.querySelector('button');
// pay_but.addEventListener('click', showMsg);

// function showMsg(){
//     //(1) promt() = cin = input>>
//     let name = prompt('Enter name');
//     pay_but.textContent = 'given name is ' + name;
//     //(2) console.log() = cout<< (in terminal)
//     console.log(`hello ${name}`); 
//     /*(2.1) using `` (tempelate literals/backticks) instead of "" 
//     allows usage of spaces,mutli-lines and quotes without escape (\) */
// }
// console.log('You\'ve added a quote')

// //(3) arrays -> note: printable in js
// let names = ["laeek","ahmed","shaikh"];
// //(4) for..in loop -> gives indices
// console.log("length = ",names.length)
// for(let val in names){
//     console.log(val,'-',names[val])
// }

// //(5) objects -> can ACT similar to maps in c++, dictionaries in py
// let animal = {name : "Lion",type : "carnivore"};
// console.log('\n',animal.name) // or animal['name']
// for(let val in animal){
//     console.log(val,'-',animal[val]) // animals.val ❌ won't work!
// }

// //(6) for..of loop -> gives values
// console.log('\n')
// for(let val of names){
//     console.log(val)
// }

// //(7) conversions;
// console.log("conversions;")
// console.log(Number("123"+15)) //"123"+15 = "12315" -> implicit conv.
// console.log(String(12345)) // String(12345) -> explicit conv.
// let n1 = Number("123"+"15")
// console.log('hello agent '+n1.toString())

// //(8) fucntions;
// function add(a,b){
//     return a+b;
// }
// console.log("result = ",add(5,2))

// //(9) Objects 2.0 -> similar to class/struct
// // primitive declaration;
// const course1 = {
//     lec: 10,
//     sec: 3,
//     title : "js with apna college",
//     notes: {
//         intro : "welcome to js course"
//     },
//     enroll(){
//         console.log("hello fren")
//     }
// }
// course1.enroll()
// console.log(course1)
// course1.sec = 12

// // Constructor Function declaration;
// function Course2(title){
//     this.title = title,
//     this.enroll = function(){
//         console.log('you are sucessfully enrolled');
//     }
// }
// const course2 = new Course2('Javascript');
// delete course2.title;
// course2.checkEnrollment = function(){
//     console.log('30 users are enrolled');
// }
// course2.enroll()
// console.log(course2); 

// /* technically, every thing in js is a object whose properties can be
// viewed by using var1. where var1 is a defined variable */

// //(10) Class;
// class Product{
//     constructor(title,price,discount,itemCode){
//         this.itemName = title;
//         this.price = price;
//         this.discount = discount;
//         this.itemCode = itemCode;
//     }
//     get getDiscountValue(){
//         return this.discount;
//     }
//     set setDiscountValue(value){
//         this.discount=value;
//     }
//     discountValue(){
//         return this.discount*this.price/100
//     }
// }

// let pencil = new Product('Pencil',50,20,'F3')
// console.log(pencil)
// pencil.price = 123  

// class Furniture extends Product{
//     constructor(itemName){
//         super(itemName); // calls the constr of parent class (Product)
//     }
//     getItemName(){
//         return this.itemName+"is a Furniture"
//     }
// }

// let chair = new Furniture('Chair',450,10,'W3')

// let l1 = [1,2,3,4,5,{name:'Laeek'}]
// console.log(l1.find(element => element.name == 'Laeek'))

// let cities=[
//     {name:'Mumbai',state:'Maharastra',population:3792621},
//     {name:'Delhi',state:'Delhi',population:8175133},
//     {name:'Bangalore',state:'Karnataka',population:2695598},
//     {name:'Chennai',state:'Tamil Nadu',population:2099451},
//     {name:'Lucknow',state:'UP',population:1526006}
// ];

// const arr1 = []
// for(let city of cities){
//     arr1.push({name:city.name,population:city.population})
// }
// console.log(arr1)

// const arr2 = cities.map(ele => {return {name : ele.name}})
// console.log(arr2)

// let total = 0
// for(let city in cities){
//    total+=cities[city].population
// }
// console.log(total)

// console.log(cities.filter(city => city.population > 3000000))

//Constructor Function declaration;
function square(side){
    this.side = side,
    this.area = function(){
        console.log(side**2);
    }
    function getDiscountValue(){
        return this.discount;
    }
}
const sqr0 = new square(10);
sqr0.area = 12

class sqr{
    constructor(side){
        this.side = side
    }
    get area(){
        return this.side**2
    }
}

let sqr1 = new sqr(10)
sqr1.area = 9
console.log(sqr1.area)

var1 = 'hello'
console.log(var1)
let n1 = 10