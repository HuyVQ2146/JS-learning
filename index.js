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
friendName ="  cThuLul     ";
friendName = friendName.trim().charAt(0).toUpperCase() + friendName.trim().slice(1).toLowerCase(); // slice từ [1:]
console.log(friendName);


let friendAge = window.prompt("Friend Age: ");
hisAge = Number(friendAge);
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
z = Boolean(k);
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

function sum(x, y ){
    return x + y;
}
console.log(sum(9,87))

function isEven(num){
    return num % 2 === 0 ? `The number: ${num} is even` : `The number: ${num} is odd`;
}
console.log(isEven(524))

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

setTimeout(h, 100); // sẽ triển khai h() sau 100ms
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
