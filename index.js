console.log("Hello  "); //cái này sẽ hiện trong phần console trong inspect của web
let hello = "Hello";
console.log(hello.charAt(2)); // hiện ra "l" trong console (giống hello[2] trong python)
console.log(hello.indexOf("o")); // giống hello.index("o") trong python
console.log(hello.lastIndexOf("o")); // in ra idx cuối cùng là "o"
console.log(hello.length); // là len(hello) trong python
console.log(hello.trim()); // là hello.strip() trong python
console.log(hello.toUpperCase()); // là hello.upper() trong python
console.log(hello.toLowerCase()); // là hello.lower() trong python
console.log(hello.repeat(3)); // là hello*3 trong python
console.log(hello.startsWith("k")); // check(true,false) xem nó có bắt đầu = "k" không
console.log(hello.endsWith("o")); // check(true,false) xem nó có kết thúc = "o" không
console.log(hello.includes("l")); // check(true,false) xem "l" có trong hello ko
console.log(hello.slice(0,4)); // là hello[0;4] trong python
console.log(hello.slice(-3)); // là hello[-3:] trong python
 
let phone = "123-456-7890";
console.log(phone.replaceAll("-","/")); // thay thế mọi "-" thành "/"
console.log(phone.padStart(15,"*")); // thêm vào đầu dãy "*" đến khi length == 15
console.log(phone.padEnd(15,"*")); // thêm vào cuối dãy "*" đến khi length == 15

alert("This is an alert!"); //window.alert() và alert() không khác gì nhau
window.alert("This is the second alert!"); //sau cái đầu thì sẽ hiện cnay
//js cũng chạy theo thứ tự từ trên xuống dưới

let check = window.prompt("Today: ")
let day = Number(check);
switch(day){ //thay thế cho if else
    case 1: // if day == 1
        console.log("Monday");
        break; // kco break thì nó sẽ chạy cả các case sau (dù sai)
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default: // nếu các case kia đều sai thì:
        console.log(`${check} is not a day!`);
        break;
    
}
/*
Đây là cách
để comment nhiều dòng
trong JavaScript
*/
document.getElementById('h1').textContent = 'Welcome to my website!'; //tạo chữ trên web bằng JS
//document để chọn cái phần chữ trong web
document.getElementById('p').textContent = 'This is a simple website created using HTML, CSS, and JavaScript.';

let x;
x = 100;
console.log(x);
x = x + 1; // + - * ** / %  += -= *= /= **= %= giống python
console.log(x);

let y  = 123;
console.log(y);
y++; //cộng thêm 1 vào y
console.log(y);
y--; // trừ đi 1 vào y
console.log(y)


let Name = 'Huy';
let age = 19;
let price = 500;
let gpa = 3.45;
let online = true;
console.log(`Your age is ${age}, your current gpa is ${gpa}, and the test price is ${price}`)
// muốn dùng format trong JS thì dùng dấu `` 
console.log(typeof Name) //kiểu dữ liệu
console.log(typeof age) 
console.log(typeof online)
document.getElementById('p1').textContent = Name;
document.getElementById('p2').textContent = age;
document.getElementById('p3').textContent = gpa;

/* 
    #vòng lặp vô hạn này làm crash máy 
let friendName = "";
while (friendName === "" || friendName === null ){
    friendName = window.prompt("Friend Name: "); // phải điền tên thì ms chạy đc những dòng tiếp theo
    console.log(friendName);    

    if ( !friendName ) { // if not friendName
        console.log("Bạn chưa nhập tên bạn bè");
    }
    else{
        friendName = friendName.trim();
        let letter = friendName.charAt(0);
        letter = letter.toUpperCase();
        let extraLetters = friendName.slice(1);
        friendName = letter + extraLetters;
        console.log(friendName);
    }
}

hoặc dùng:

let friendName;
do {
    ---nhập func tương tự trên 
} while(friendName === "" || friendName === null )

-thì nó cũng chạy y hệt chương trình trên


    #có thể dùng check log in:
let login = false;
let username;
let password;
while (!login) {
    username = window.prompt("Please enter your username");
    password = window.prompt("Please enter your password");
    if (username === "admin" && password === "password") {
        login = true;
        console.log(`Welcome to the website Mr. ${username} !`);
    }
    else {
    console.log("Invalid username or password");
    }
}
*/

// hoặc 
let friendName ="  cThuLul     ";
friendName = friendName.trim().charAt(0).toUpperCase() + friendName.trim().slice(1).toLowerCase(); // slice từ [1:]
console.log(friendName);


let friendAge = window.prompt("Friend Age: ");
let hisAge = Number(friendAge);
hisAge += 1;
console.log(hisAge);

let temp  = window.prompt("Nhiệt độ:");
if (temp > 0 && temp <= 40) { //    && là and; || là or; ! là not
    console.log("Vẫn OK");
}
else{
    console.log("Chết ngoài trời");
}

let k = 'pizza';
x = Number(k);
y = String(k);
let z = Boolean(k);
console.log(x, typeof x); // NaN 'number'
console.log(y, typeof y); // pizza string
console.log(z, typeof z); // true 'boolean' (cứ khác (0 hoặc "") là true)

let username;
document.getElementById('mySubmit').onclick = function(){
    username = document.getElementById('myText').value;
    console.log(username);
    document.getElementById("welcome").textContent = `Hello ${username}`;
}

const pi = 3.14159 // gtri của const sẽ k bao h đổi
let radius;
let circumference;
radius = Number(window.prompt('Enter radius: '));
circumference = 2*pi*radius;
console.log(circumference)

document.getElementById('sub-radius').onclick = function(){
    radius = Number(document.getElementById('radius').value);
    let area = pi * (radius**2) ;
    console.log(area);
    document.getElementById('result').textContent = 'Area: ' + String(area) ;
}

if(pi == "3.14159"){ // True;  dấu "==" trong js chỉ cần bằng gtri chứ khác type vx đc
    console.log("True");
}
else if( pi === "3.14159"){ // False; dấu "===" là phải giống cả gái trị và type
    console.log("False")
}

if(pi != "3.14159"){ // False;  cùng gtri mà khác type vx đc
    console.log("True");
}
else if( pi !== "3.14159"){ // True; dấu "!==": là phải giống cả giá trị và type thì ms là False
    console.log("False")
}

const score = document.getElementById('myScore');
const sub_score = document.getElementById('sub-score');
const grade = document.getElementById("grade");

sub_score.onclick = function(){
    switch(true){
        case score.value > 100: //if (score.value > 100) == true
            grade.textContent = "You're expelled for cheating!";
            break;
        case score.value >= 90:
            grade.textContent = "Your grade is: A.";
            break;
        case score.value >= 80:
            grade.textContent = "Your grade is: B.";
            break;
        case score.value >= 70:
            grade.textContent = "Your grade is: C.";
            break;
        case score.value >= 60:
            grade.textContent = "Your grade is: D.";
            break;
        default:
            grade.textContent = "Your grade is: F.";
            break;
    }
}



console.log(Math.PI); //thư viện Math trong js
console.log(Math.E);
console.log(Math.floor(4.5)); // thư viện giống python
console.log(Math.ceil(4.5));
console.log(Math.pow(3,5));
console.log(Math.sqrt(99));
console.log(Math.trunc(8.33)); // làm tròn lên xg
console.log(Math.log(267));
console.log(Math.sin(45)); //ở đây số bên trong tự động là độ
console.log(Math.cos(45));
console.log(Math.tan(45)) ;
console.log(Math.abs(-456));
console.log(Math.sign(99)); //cnay xét âm dương: âm là -1, 0 là 0, dương là 1
console.log(Math.max(132,-123,31));
console.log(Math.min(-1109,33,99));
console.log(Math.random()); // tạo số bất kì giữa >=0 và <1

// tạo 1 số random giữa 2 số
let min = 1;
let max = 100;
let ran = Math.trunc(Math.random() * (max - min)) + min;
console.log(ran);

const Age = document.getElementById('age');
const sub_age = document.getElementById("sub-age");
const result_age = document.getElementById("result-age");

const AgePara = document.getElementById("AgePara");
sub_age.onclick = function(){
    age = Number(Age.value);
    if(age > 70){
        console.log('You are old');
        result_age.textContent = 'You are old';
    }
    else if(age < 20){
        console.log('You are young');
        result_age.textContent = 'You are young';
    }
    else{
        console.log('You are middle-aged');
        result_age.textContent = 'You are middle-aged';
    }
    
    // viết tắt lệnh if else của js trong 1 dòng
    let message = age>=18 ? "You are old enough to enter the website.":"You cannot access this website!";
    // dấu ? để check:         if True                                 else      if False
    AgePara.textContent = message;

    let webAge = true
    let secondMess = webAge ? "This website is for adults." : "This website is for kids.";
    AgePara2.textContent = secondMess;

}


const money = document.getElementById('money');
const sub_money = document.getElementById('sub-money');
const moneyPara = document.getElementById('moneyPara');
sub_money.onclick = function(){
    Money = Number(money.value);
    
    let discount = Money>=100 ? 10:0 ; // cái if else có thể là gì cx đc
    moneyPara.textContent = `Your total is $${Money - Money*(discount/100)}.`;     
}

const checkBox = document.getElementById('checkBox');
const Visa = document.getElementById('Visa');
const Paypal = document.getElementById('Paypal');
const Card = document.getElementById('Card');
const form_btn = document.getElementById('form-btn');
const sub = document.getElementById('sub');
const pay = document.getElementById('pay');
form_btn.onclick = function(){
    if (checkBox.checked){ // cái .checked sẽ ktra true false (cả đc chọn hay k)
        sub.textContent = "Subcribed!"
    }
    else{
        sub.textContent = "Not Subcribed yet!"
    }

    if (Paypal.checked){
        pay.textContent = "Pay with PayPal"
    }
    else if (Visa.checked){
        pay.textContent = "Pay with Visa"
    }
    else if (Card.checked){
        pay.textContent = "Pay with Card"
    }
    else{
        pay.textContent = "Not paid yet!"
    }
}

for (let i = 1; i < 20 ; i++){ // i+= 1 cx đc
    if (i == 9) {
        console.log("failure");
        continue
    }
    else if (i == 15) {
        console.log(i);
        console.log("End");
        break;
    }
    else {
        console.log(i)
    }
}

function hpBrthd(name,age){
    console.log(`Happy Birthday ${name}! You are ${age} now! Get your ass up and get to work!`)
}
hpBrthd('Duy Đức', 19)

function Sum(x, y ){
    return x + y;
}
console.log(Sum(9,87))

function IsEven(num){
    return num % 2 === 0 ? `The number: ${num} is even` : `The number: ${num} is odd`;
}
console.log(IsEven(524))

function checkRegularEmail(email) {
    if(email.includes('@') && email.includes('.com')){ // giống if "@" in email trong python
        return true;
    }
    else{
        return false;
    }  
}
console.log(checkRegularEmail('duyduc@gmail.com'))  

let a = 10;

function func1(){
    console.log(a); // a = 10
}
func1();

function func2(){
    let a = 30;
    console.log(a); // a = 30
}
func2();
console.log(a); // a = 10  (a chỉ bằng 30 trong func2)


/* Không chạy: k thể có 2 biến a
function func3(){
    console.log(a); // a = 10
    let a = 20;
    console.log(a); // a = 20
}
func3();
*/

let fruits = ["apple", "banana", "orange"];
console.log(fruits);
console.log(fruits[1]);
fruits[3] = "coconut";
console.log(fruits);
fruits[1] = "grape";
console.log(fruits);
console.log(fruits[3]);
console.log(fruits[4]); // kco idx 4 thì sẽ cho ra undifined
fruits.push("kiwi"); // giống .append() trong python
console.log(fruits);
fruits.pop(); // giống .pop() trong python
console.log(fruits);
fruits.unshift("strawberry"); // giống .appendleft() trong python
console.log(fruits);
fruits.unshift("blueberry");
console.log(fruits);
fruits.shift(); // giống .popleft() trong python
console.log(fruits);
console.log(fruits.length);
let idx = fruits.indexOf("grape");
console.log(idx);
let checkFruit = fruits.indexOf("potato"); // =1 tức là kco trong array
console.log(checkFruit);
for (let f = fruits.length -1; f >= 0; f--){
    console.log(fruits[f]);
}
for(let fruit of fruits){
    console.log(fruit); // giống 'for i in array' trong python
}
fruits.sort(); // giống arr.sort() trong python
console.log(fruits);
fruits.sort().reverse(); 
console.log(fruits);
let vegetables = ["carrots", "onions", "celery"];
let food = [...fruits, ...vegetables, "eggs", "milk"]; // tạo 1 list lớn hơn
console.log(food);



let arr = [1,2,3,4,5,6,7,8,9,10]
let maxium = Math.max(arr);
console.log(maxium); // ra NaN : max k nhận arr (khác python), phải là sô
maxium = Math.max(...arr); // ... để spread ra (giống kiểu unbox array)
console.log(maxium);
let minium = Math.min(arr);
console.log(minium);
minium = Math.min(...arr);
console.log(minium);

let NaMe = "Vu Quang Huy";
let letter = [NaMe]; // ['Vu Quang Huy']
console.log(letter);
letter = [...NaMe]; // ['V', 'u', ' ', 'Q', 'u', 'a', 'n', 'g', ' ', 'H', 'u', 'y']
console.log(letter);
letter = [...NaMe].join('-'); // V-u- -Q-u-a-n-g- -H-u-y // giống .join() của python
console.log(letter); 


let food1 = "bread";
let food2 = "pasta";
let food3 = "pizza";
function openFridge(...foods){ // tạo phần tử cho list
    for (let fo of foods){
        console.log(fo);
    }
    console.log(foods);
}
openFridge(food1, food2, food3);
function getFood(...foods){
    return foods;
}
let curFridge = getFood(food1, food2, food3);
console.log(curFridge); // ["bread", "pasta", "pizza"]

function getAverage(...nums){
    let result = 0;
    for (let num of nums){
        result += num;
    }
    return result / nums.length; // nums đã là 1 list r
}
let ave_num = getAverage(14,789,43,244,9);
console.log(ave_num)

function combineString(...string){
    return string.join(" ")
};
let full = combineString("Vu", "Quang", "Huy");
console.log(full);



let numbers = [1,2,3,4,5];
function callback(element){
    console.log(element);
};
function triple(element, index, array){ // forEach() sẽ tự động lấy value, index, array của numbers
    // nếu để 1 mình element cx đc
    array[index] = element * 3;
    console.log(array[index]);
};
numbers.forEach(callback); // với mỗi num trong numbers, callback() nó
numbers.forEach(triple);
let squares = numbers.map( (element) => Math.pow(element, 2) );
console.log(squares); // [9, 36, 81, 144, 225]

function cube(element){
    return Math.pow(element, 3);
};


function formatDate(cur){
    const parts = cur.split('-'); // giống trong python
    return `${parts[2]}-0${parts[1]}-${parts[0]}`;
};
const dates = ['2024-9-11', '2020-2-12', '2025-2-26'];
const formattedDates = dates.map(formatDate);
console.log(formattedDates); // ["11-09-2024", "12-02-2020", "26-02-2025"]



function isEven(value){
    return value % 2 === 0;
};
function isOdd(value){
    return value % 2 !== 0;
};
let nums = [1,2,3,4,5,6,7,8,9,0];
let evens = nums.filter(isEven); // check nếu true thì lấy
let odds = nums.filter(isOdd);
let zero = nums.filter( (element) => element === 0);

console.log(evens);
console.log(odds);
console.log(zero);


function sum(prev, next){
    return prev + next
}
function getMax(accumulator, element){   // accumulator: tích lũy
    return Math.max(accumulator, element);
}

const prices = [5, 20, 98, 74, 33];
const total = prices.reduce(sum); // sẽ thực hiện hàm sum() đến khi array chỉ còn 1 giá trị cuối cùng
const Max = prices.reduce(getMax);
const Min = prices.reduce(function(prev, next){ // có thẻ tạo luôn func trong này
    return Math.min(prev, next);
});
const alsoSum = prices.reduce( (prev, next) => prev + next);

console.log(`$ ${total.toFixed(2)}`); // 230
console.log(`Most expensive price: $${Max}`);
console.log(`Least expensive price: $${Min}`); 
console.log(`Sum of all prices: $${alsoSum.toFixed(2)}`); // 230



// Các cách tạo func trong js
function h(){   
    console.log('h() called');
}
const H = function(){
    console.log('H() called');
}

setTimeout(h(), 100); // sẽ triển khai h() sau 100ms
setTimeout(H, 100);
setTimeout(function(){
    console.log('anonymous function called');
}, 100);

const he = (name, age) => {console.log(`hello ${name}`);
                           console.log(`Ur ${age} year old`)};
he("Huy", 19);

setTimeout( () => console.log("Hello world."), 100 ); // nếu vt 1 dòng thì k cần {}



const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    sayHello: () => console.log(`Hello ${person1.firstName} ${person1.lastName}.`), // phải để person1. thì nó ms nhận
                // để this thì sẽ k chạy (do cách khai báo), nó sẽ nhận gtri ở ngoài cnay (ở đây là window)
    init: function(){console.log(this)},
}
const person2 = {
    firstName: "Đức",
    lastName: "Hanma",
    age: 23,
    isEmployed: false,
    sayHello: function(){console.log(`Hello ${person2.firstName} ${this.lastName}.`)},
    init: function(){console.log(this)},
}
console.log(this)

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello(); // Hello John
person1.init();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.init();


//như này tạo nhiều object vs cùng 1 loại dữ liệu dễ hơn
function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.startEngine = function(){console.log(`${this.make} ${this.model} is starting engine...`)}; 
}

const car1 = new Car("Ford", "Mustang", 2024, "red"); // bắt buộc phải thêm new
const car2 = new Car("Lamborghini", "Aventador", 2000, "yellow");
const car3 = new Car("Chevrolet", "Camaro", 2015, "gold");

console.log(car1);
car1.startEngine();
console.log(car1.color);

console.log(car2);
car2.startEngine();
console.log(car2.color);

console.log(car3);
car3.startEngine();
console.log(car3.color);


class Product{
    constructor(name, price){ // cnay y hệt __init__ trong python, k đổi tên constructor đc
        this.name = name;
        this.price = price;
    }
    displayInfo(){
        console.log(`Name: ${this.name}, Price: $${this.price.toFixed(2)}`);
    }
    calTax(tax){
        return this.price * (1 + tax)
    }
}
const tax = 0.05; // có thể dùng giá trị ở ngoài vào bên trong class

const product1 = new Product("Website", 20);
const product2 = new Product("Computer", 199.993)

product1.displayInfo();
product2.displayInfo();

const finalCost = product1.calTax(tax) + product2.calTax(tax);
console.log(`Total price with tax: $${finalCost.toFixed(2)}`);


// cách tạo thư viện
class MathUtil{
    static PI = 3.14159
    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return MathUtil.PI * MathUtil.getDiameter(radius);
    }   
    static getArea(radius){
        return MathUtil.PI * Math.pow(radius, 2);
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10))
console.log(MathUtil.getCircumference(10))
console.log(MathUtil.getArea(10))


class User{
    static userCount = 0;
    constructor(name){
        this.name = name;
        User.userCount++;  // cứ mỗi user đc tạo ra count +=1
    }
    static getTotalUsers(){
        if (User.userCount > 1 ){
            console.log(`${User.userCount} users are online.`)
        }
        else{
            console.log(`${User.userCount} user is online.`)
        }
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

const user1 = new User("John");
user1.sayHello();
console.log(User.userCount); // 1
User.getTotalUsers();

const user2 = new User("Joe");
user2.sayHello();
console.log(User.userCount); // 2 
User.getTotalUsers(); // hàm static thuộc về class chứ kp biến



class Animal{
    alive = true; // để là this.alive cx đc

    eat(){ 
        console.log(`${this.constructor.name} is eating.`);
    }

    sleep(){
        console.log(`${this.constructor.name} is sleeping.`);
    }
}
class Dog extends Animal{ // class Dog là class con của Animal , class con kế thừa thuộc tính của class cha
    name = "Dog";
    bark(){  // function mới chỉ tồn tại trong class DOg
        console.log(`${this.name} is barking.`);
    }
}

class Fish extends Animal{ 
    name = "Fish";
    swim(){
        console.log(`${this.name} is swimming.`);
    }
}

class Eagle extends Animal{
    name = "Eagle";
    fly(){
        console.log(`${this.name} is flying.`);
    }
}

const dog = new Dog();
const fish = new Fish();
const eagle = new Eagle();

dog.alive = false;
console.log(dog.alive);
dog.eat();
dog.sleep();
dog.bark();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

console.log(eagle.alive);
eagle.eat();
eagle.sleep();
eagle.fly();



class Athlete{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`${this.name} moved at a speed of ${speed} kmh.`)
    }
}
class Runner extends Athlete{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }
    run(){
        console.log(`${this.name} is a runner.`);
        super.move(this.speed);  // cách call func trong class bố
    }
}
class Swimmer extends Athlete{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }
    swim(){
        console.log(`${this.name} is a swimmer.`);
        super.move(this.speed);
    }
}
class Sprinter extends Athlete{
    constructor(name, age, speed){
        super(name, age); 
        this.speed = speed;
    }   
    sprint(){
        console.log(`${this.name} is a sprinter.`);
        super.move(this.speed);
    }
}
const per1 = new Runner("Dio", 22, 30);
const per2 = new Swimmer("Jeff", 20, 25);
const per3 = new Sprinter("Mark", 21, 60);

console.log(per1.name);
console.log(per1.speed);
per1.run();

console.log(per2.name);
console.log(per2.speed);
per2.swim();

console.log(per3.name);
console.log(per3.speed);
per3.sprint();




class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){ // newWidth là một giá trị bất kỳ được gán vào thuộc tính width của object
        if (newWidth > 0) {
            this._width = newWidth; // thêm prefix _ để bt gtri này là private
        }
        else{
            console.error("Width must be greater than 0.");
        }
    }
    set height(newHeight){
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else{
            console.error("Height must be greater than 0.");
        }
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    get area(){
        return this._width * this._height;
    }
}
const rectangle = new Rectangle(5,9);

console.log(rectangle.width); // nếu width k thoải mãn, in ra lỗi và in lại các gia ban đầu
console.log(rectangle.height);
console.log(rectangle.area);

rectangle.width = -9;
rectangle.height = "potato";

console.log(rectangle.width); 
console.log(rectangle.height);
console.log(rectangle.area);

rectangle.width = 9;
rectangle.height = 13;

console.log(rectangle.width); 
console.log(rectangle.height);
console.log(rectangle.area);


let m = 2;
let n = 1;
[m, n] = [n, m];
console.log(m); // 1
console.log(n); // 2

let colors = ["red", "green", "blue", "black", "white"];
let [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor); // red
console.log(secondColor);  // green
console.log(thirdColor); // blue

let [stColor, ndColor, rdColor, ...extraColor] = colors;
console.log(stColor); // red
console.log(ndColor); // green
console.log(rdColor); // blue
console.log(extraColor); // ["black", "white"]

const pers1 = {
    per1_name: "John",
    per1_age: 22,
    per1_work: "builder",
}
const pers2 = {
    per2_name: "Jane",
    per2_age: 25,
}
const pers3 = {
    name: "Yasuo",
    age: 21,
    job: "swordmaster",
}
const pers4 = {
    name: "Sakura",
    age: 20,
    job: "healer",
}
const {per1_name, per1_age, per1_work} = pers1; // tên trong {} phải trùng vs tên trong person
console.log(per1_name); // "John"
console.log(per1_age); // 22
console.log(per1_work); // "builder"

const {per2_name, per2_age, per2_work="unemployed"} = pers2; // nếu kco ="unemployed" sẽ ra undifined
console.log(per2_name); 
console.log(per2_age); 
console.log(per2_work);

function displayPer({name, age, job}){
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}
displayPer(pers3);
displayPer(pers4);



const pe = {
    duc_fullName: "Duc Backy",
    duc_age: 23,
    duc_job: "waitress",
    isStudent: true,
    hobbies: ["cycling", "laying", "bulking"],
    address: {
        street: "De La Thanh",
        city: "Hanoi",
        country: "Vietnam",
    }
}
console.log(pe.duc_fullName);
console.log(pe.duc_age);
console.log(pe.duc_job);
console.log(pe.isStudent);
console.log(pe.hobbies);
console.log(pe.hobbies[2]);
console.log(pe.address);
console.log(pe.address.street); // cách gọi {} trong {}
for(const property in pe.address){ // giống dict trong pyhton
    console.log(pe.address[property]);
}




class PERson{
    constructor(name, age, ... address){  // phần còn lại sẽ trong ...address
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}
const perS1 = new PERson("Duk Yiu", 19, "766 DeLaThanh", "Hưng Yên", "VN");
console.log(perS1);
console.log(perS1.name);
console.log(perS1.age);
console.log(perS1.address);
console.log(perS1.address.city);



const Fruits = [
    {name: "apple", color: "red", calories: 95},
    {name: "banana", color: "yellow", calories: 105},
    {name: "orange", color: "orange", calories: 85},
    {name: "grape", color: "purple", calories: 120},
    {name: "melon", color: "green", calories: 140},
    {name: "watermelon", color: "green", calories: 160},
    {name: "pineapple", color: "yellow", calories: 110},
]
Fruits.forEach(fruit => console.log(fruit.name));

const fruitsColor = Fruits.map(fruit => fruit.color);
console.log(fruitsColor);

const greenFruits = Fruits.filter(fruit => fruit.color === "green");
console.log(greenFruits);

const highCaloFruits = Fruits.filter(fruit => fruit.calories >= 100);
highCaloFruits.forEach(fruit => console.log(fruit.name));

const maxCalo = Fruits.reduce((max, cur) => max.calories > cur.calories ? max : cur);
console.log(maxCalo);

Fruits.sort((a,b) => a.calories - b.calories); // sắp xếp theo sự tăng dần của số calo
Fruits.forEach(fruit => console.log(fruit.name));
console.log(Fruits.map(f => f.name));
// ['orange', 'apple', 'banana', 'pineapple', 'grape', 'melon', 'watermelon']
Fruits.sort((a,b) => a.name.localeCompare(b.name)); // sắp xếp str theo lexicographic
Fruits.forEach(fruit => console.log(fruit.name));
Fruits.sort((a,b) => b.name.localeCompare(a.name)); // sắp xếp str theo reversed lexicographic
Fruits.forEach(fruit => console.log(fruit.name));




let fs = ["apple", "orange", "pineapple", "mango", "lime", "pear"];
fs.sort();
console.log(fs);

let nms = [1,10,7,5,3,9,2];
nms.sort(); // [1, 10, 2, 3, 5, 7, 9] : lexicographic
console.log(nms);
nms.sort((a,b) => a-b);  // [1, 2, 3, 5, 7, 9, 10] : như sort() bthg trong python
console.log(nms);
nms.sort((a,b) => b-a); // [10, 9, 7, 5, 3, 2, 1] : như sort(reverse=True) trong python
console.log(nms);



// tạo hàm tráo (shuffle()):
const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
shuffle(cards);
console.log(cards);
function shuffle(array){
    for (let i = array.length - 1; i >= 0; i--){
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
}



// Date(year, month, day, hour, minute, second, ms)
let date = new Date(2024,0,1,2,3,4,5); // tháng 1 là 0 -  tháng 12 là 11 // 1 → Ngày 1.
console.log(date); // Mon Jan 01 2024 02:03:04 GMT+0700 (Indochina Time)
date = new Date("2024-01-02T12:00:00Z");
console.log(date); // Tue Jan 02 2024 19:00:00 GMT+0700 (Indochina Time)
/*  "2024-01-02" → Ngày 2 tháng 1 năm 2024.
    "T12:00:02" → Giờ 12, phút 00, giây 02. */
date = new Date(1700000000000); // Tạo đối tượng Date từ timestamp (số milliseconds tính từ 01/01/1970 UTC).
console.log(date); // Wed Nov 15 2023 05:13:20 GMT+0700 (Indochina Time)


date = new Date(); // Tạo một đối tượng Date mới với thời gian hiện tại.
const year = date.getFullYear(); 
const month = date.getMonth(); // chạy từ 0-11
const Day = date.getDate();
const DayOfWeek = date.getDay(); // sunday: 0, monday: 1
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

console.log(`Year: ${year}`);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(`Month: ${months[month]}`);
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(`Day: ${days[DayOfWeek]}, ${Day} ${months[month]} ${year}`);
console.log(`Time: ${hour}:${minute}:${second}`);

// tạo ngày ms
date = new Date();
date.setFullYear(2023);
date.setMonth(3);
date.setDate(25);
date.setHours(6);
date.setMinutes(25);
date.setSeconds(3);
console.log(date); // Tue Apr 25 2023 06:25:03 GMT+0700 (Indochina Time)


// múi h
date = new Date();
console.log(date.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })); // Múi giờ Jakarta (GMT+7)
console.log(date.toLocaleString("en-US", { timeZone: "Asia/Tokyo" })); // Múi giờ Tokyo (GMT+9)
console.log(date.toLocaleString("en-US", { timeZone: "UTC" })); // Giờ quốc tế UTC

//Nếu bạn muốn hiển thị thời gian UTC thay vì thời gian địa phương:
console.log(date.toUTCString()); // Hiển thị ngày giờ theo UTC  
// // Wed, 05 Mar 2025 07:32:57 GMT


const date1 = new Date("2024-12-31");
const date2 = new Date("2025-01-01");
if (date2 > date1){     // true
    console.log("Happy new year!")
}


// inner func
function createCounter(){
    let count = 0;

    function increase(){
        count++;
        console.log(`Count is: ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increase, getCount};
    /* là :
    return {
        increase: increase,
        getCount: getCount
    };
    Do ES6 cho phép viết gọn nếu tên thuộc tính trùng với tên biến nên ta chỉ cần { increase, getCount }. */
}
const counter = createCounter();
counter.increase();
counter.increase();
console.log(`The current count is: ${counter.getCount()}`);



function createGame(){
    let score = 0;
    
    function getStart(){
        console.log("Game start!");
    }

    function getScore(){
        return score;
    }

    function gainScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function loseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    return {getStart, getScore, gainScore, loseScore}
}
const game = createGame();
game.gainScore(8);
game.gainScore(5);
game.loseScore(3);
console.log(`Final score: ${game.getScore()}pts.`)




// setTimeout(func, time):
function startTimer(){
    timeoutId = setTimeout(() => window.alert("Start"), 3000);
    console.log("Countdown started!"); // cnay chạy trc cái timeOut
}
function clearTimer(){ 
    clearTimeout(timeoutId);  // dùng func này thì func bên trong theo timeout sẽ k chạy nx
    console.log("Countdown stopped!");
}



// muốn import thì phải thêm type="module" vào phần <script></script>
import {PI, getCircumference, getArea, getVolume} from './lib.js';
console.log(PI)
const Circumference = getCircumference(10);
const Area = getArea(10);
const Volume = getVolume(10);

console.log(`Circumference: ${Circumference.toFixed(2)}cm`);
console.log(`Area: ${Area.toFixed(2)}cm^2`);
console.log(`Volume: ${Volume.toFixed(2)}cm^3`);


// synchronous: là line-by-line bthg
// asynchronous: là mấy cái chạy cùng lúc (như setTimeout())
function f1(callback){
    setTimeout(() => {console.log("Task 1");
                      callback();}, 500)
}
function f2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
} 
f1(f2); 



// cách bắt lỗi
try{
    console.log(this_is_a_big_error)
}
catch(error){ // nếu có lỗi ở try thì sẽ bắt lại
    console.error(error);
}
finally{  // cái này sẽ luôn chạy bất kể có lỗi hay k
    console.log("This will always run."); // luôn luôn chạy
}


try{
    const dividend = Number(window.prompt("Enter a dividend:"));
    const divisor = Number(window.prompt("Enter a divisor:"));

    /*throw dùng để ném lỗi đó ra, 
    làm dừng chương trình hoặc nhảy vào catch nếu có try...catch.*/ 
    if(divisor == 0){
        throw new Error("Divisor cannot be zero.");
    }

    if(isNaN(dividend) || isNaN(divisor)){ 
        throw new Error("Invalid input. Please enter a number.");
    }

    console.leg(dividend / divisor);
}
catch(error){
    console.error(error);
}
finally{
    console.log("Success")
}


document.title = "LearningJS"; // sửa title
document.body.style.backgroundColor = "hsl(0, 0%, 80%)"; // đổi màu background mà k dùng css
console.dir(document) // tất cả mọi thứ trong document


const myHeading =  document.getElementById("myHeading");
myHeading.style.backgroundColor = "orange";
myHeading.style.textAlign = "center";
console.log(myHeading);
// <h2 id="myHeading" style="background-color: orange; 
// text-align: center;">cre: vqHuy</h2>


const supports = document.getElementsByClassName("supports"); // đây coi như là 1 array
                                                              // HTMLCollection
                                                              // vẫn có [i] theo thứ tự
                                                              // vd supports[0] == Sp1
console.log(supports);
for (let sp of supports){
    sp.style.backgroundColor = "lime";
    console.log(sp);
}
// k muốn dùng for thì có thể dùng array method
Array.from(supports).forEach(sp => {
    sp.style.fontWeight = "bold";
})


const h4elements = document.getElementsByTagName("h4");
const lielements = document.getElementsByTagName("li");
console.log(h4elements);
console.log(lielements);

for(let h4 of h4elements){
    h4.style.backgroundColor = "darkblue";
    h4.style.color = "white";
}
Array.from(lielements).forEach(li => {
    li.style.backgroundColor = "lightgreen";
})


const element = document.querySelector("li"); // querySelector() sẽ chỉ chọn cái đầu tiên
element.style.backgroundColor = "green";
element.style.color = "white";

const sp1 = document.querySelector(".supports"); // dùng .ClassName cx đc
sp1.style.backgroundColor = "wheat";

const sps = document.querySelectorAll(".supports");
sps[2].style.backgroundColor = "pink";

const li = document.querySelectorAll("li"); // chọn trong tất cả các li của web
li[5].style.backgroundColor = "pink"; 



const sale = document.getElementById("sale");
const firstSale = sale.firstElementChild;
firstSale.style.backgroundColor = "purple";
firstSale.style.color = "white";
const sale_next = sale.nextElementSibling; // ở đây next là cả <ul>
                                           // nếu kco next thì k chạy
sale_next.style.backgroundColor = "lightblue";

const uls = document.querySelectorAll("ul");
uls.forEach(ul => {
    const firstUl = ul.firstElementChild;
    firstUl.style.fontSize = "1.5em"

    const lastUl = ul.lastElementChild;
    lastUl.style.fontSize = "1.2em";
    lastUl.style.fontWeight = "bold";

})  

const huy = document.getElementById("Huy");
const huy_next = huy.nextElementSibling;
huy_next.style.backgroundColor = "brown"; // cái tiếp theo sau cái có id "Huy"
const parent = huy.parentElement; // ở đây là cả <ul> ngoài
parent.style.backgroundColor = "gray"; 

const thang = document.getElementById("Thang");
const thang_prev = thang.previousElementSibling;
thang_prev.style.color = "white"; // kco ỏev thì k chạy

const service = document.getElementById("service");
const children = service.children; // là array
console.log(children);
Array.from(children).forEach(child => {
    child.style.backgroundColor = "white";
})
children[3].style.color = "red";



const newH1 = document.createElement("h1"); // tạo thêm thẻ <h1>
newH1.textContent = "Created by js";
document.body.append(newH1); // thêm vào cuối body
newH1.id = "newH1";
newH1.style.color = "brown";

const newH1_next = document.createElement("h1"); // tạo thêm thẻ <h1>
newH1_next.textContent = "Created by js";
newH1_next.id = "newH1_next";
newH1_next.style.color = "tomato";
newH1_next.style.display = "block";
newH1_next.style.textAlign = "center";
document.body.prepend(newH1_next); // thêm lên đầu body

const newH2 = document.createElement("h2"); // tạo thêm thẻ <h2>
newH2.textContent = "Created by js";
document.getElementById("box1").append(newH2); // thêm vào cuối Box1
newH2.id = "newH2";
newH2.style.textAlign = "center";
newH2.style.color = "brown";

const newH2_next = document.createElement("h2"); // tạo thêm thẻ <h2>
newH2_next.textContent = "Created by js";
newH2_next.id = "newH2_next";
newH2_next.style.color = "tomato";
newH2_next.style.textAlign = "center";
document.getElementById("box2").prepend(newH2_next); // thêm lên đầu Box2 

const newH3 = document.createElement("h3");
newH3.textContent = "Created by js";
newH3.id = "newH3";
newH3.style.textAlign = "center";
newH3.style.color = "blue";
const box3 = document.getElementById("box3");
document.body.insertBefore(newH3,      box3); // chèn newH3 và trc box3
                        //newElement   currentElement

const newH3_next = document.createElement("h3"); // tạo thêm thẻ <h3>
newH3_next.textContent = "Created by js";
newH3_next.id = "newH3_next";
newH3_next.style.color = "tomato";
newH3_next.style.textAlign = "center";
const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH3_next, boxes[3]);

const b4 = document.getElementById("b4");
document.getElementById("box4").removeChild(b4); // cách xóa trong html
// xóa chữ Box 4

const newListItem = document.createElement("li");
newListItem.id = "line4";
newListItem.style.fontWeight = "bold";
newListItem.textContent = "Line 4";
newListItem.style.backgroundColor = "lime";
document.getElementById("lines").append(newListItem);
// có thể dùng tất cả các cách trên để chèn line4 vào trong lines

const myBox = document.getElementById("myBox"); // có thể dùng tương tự vs btn
function changeColor(event){ 
    console.log(event);
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! ⚔️";
}
myBox.addEventListener("click", changeColor)
                     // event    callback
// hoặc cách khác
myBox.addEventListener("mouseover", event => { // event sẽ nhận cái trc đấy
                                               // ở đây là "mouseover"
    event.target.style.backgroundColor = "yellow";
        //target ở đây là "myBox" bên ngoài
    event.target.textContent = "Click me 🙂";
})
myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "antiquewhite";
    event.target.textContent = "Come here 🎶";
})
document.addEventListener("keydown", event => { // nếu bấm trên bàn phím
    console.log(`Key down: ${event.key}`);
});
document.addEventListener("keyup", event => { // nếu thả tay ra khỏi phím   
    console.log(`Key up: ${event.key}`);
});

const myBox2 = document.getElementById("myBox2");
document.addEventListener("keydown", event => { 
    myBox2.style.backgroundColor = "tomato";
});
document.addEventListener("keyup", event => {   
    myBox2.style.backgroundColor = "lightblue";
});
const moveAmount = 10;
let X = 0;
let Y = 0;
document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")){

        event.preventDefault(); // cnay để nếu myBox2 ra khỏi màn hình (tạo phần
                                // scroll) thì giữa nguyên vị trí của màn hình
                                // chứ k theo myBox2

        switch(event.key){
            case "ArrowUp":
                Y -= moveAmount;
                break;
            case "ArrowDown":
                Y += moveAmount;
                break;
            case "ArrowLeft":
                X -= moveAmount;
                break;
            case "ArrowRight":
                X += moveAmount;
                break;
        }
        myBox2.style.top = `${Y}px`; // vị trí của myBox2
        myBox2.style.left = `${X}px`;
    }
});



const myImg = document.getElementById("myImg");
const imgBtn = document.getElementById("imgBtn");
imgBtn.addEventListener("click", event =>{
    /* 2 cách :
    if (myImg.style.display === "none"){
        myImg.style.display = "block";
        imgBtn.textContent = "Hide";
    }
    else{
        myImg.style.display = "none";
        imgBtn.textContent = "Show";
    }
    */
    if (myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        imgBtn.textContent = "Hide";
    }
    else{
        myImg.style.visibility = "hidden";
        imgBtn.textContent = "Show";
    }

})


let btns = document.querySelectorAll(".myBtns");
console.log(btns);
/*
    Static NodeList: Kết quả của querySelectorAll() 
→ không tự động cập nhật nếu DOM thay đổi.
    NodeList có thể duyệt qua bằng vòng lặp forEach(), 
nhưng không có đầy đủ các phương thức của Array như map(), 
filter(), reduce().
*/
btns.forEach(btn => {
    btn.style.backgroundColor = "tomato";
    btn.textContent += "😶‍🌫️";

    btn.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "red";
    })

    btn.addEventListener("click", event => {
        event.target.style.backgroundColor = "blue";
    })

    btn.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "tomato";
    })
})

const newBtn = document.createElement("button");
newBtn.textContent = "Button 5";
newBtn.classList = "myBtns";
document.body.appendChild(newBtn); 
// nếu console.log(btns) kết quả chỉ như cũ, k update
btns = document.querySelectorAll(".myBtns");
console.log(btns);

btns.forEach(btn => {
    btn.addEventListener("click", event => {
        event.target.remove();  // cách xóa
        btns = document.querySelectorAll(".myBtns");
        console.log(btns);
    })
})


// có thể dùng phương pháp này cho mọi thứ k chỉ btn
const myButton = document.getElementById("myButton");
myButton.classList.add("enabled"); // thêm class "enabled" vào myButton 
myButton.addEventListener("mouseover", event => {
    event.target.classList.remove("enabled"); // xóa class "enabled" khỏi myButton 
})
myButton.addEventListener("mouseout", event => {
    event.target.classList.add("enabled"); 
})

myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover"); // .toggle sẽ xóa class nếu đã có,
                                            //         thêm class nếu chưa có
})
myButton.addEventListener("mouseout", event => { 
    event.target.classList.toggle("hover");
})
myButton.addEventListener("click", event => {
    if (event.target.classList.contains("disabled")){ // nếu chứa class "disabled"
        event.target.textContent += "🤬";
        event.target.classList.replace("disabled", "mBtn");
    }
    else{   
        event.target.classList.replace("mBtn" ,   "disabled");
                                    //hiện tại      để đổi
    }
})
