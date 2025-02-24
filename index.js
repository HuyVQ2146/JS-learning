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
friendName = friendName.trim().charAt(0).toUpperCase() + friendName.trim().slice(1).toLowerCase();
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
