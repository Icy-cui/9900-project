// Object 对象
let user = {
    name: "John",
    age: 30,
    phone: "123456789",
    sayHi() {
      console.log("Hi");
    },
    sayName() {
      console.log(this.name);
    },
  };

// 箭头函数
let sum = (a, b) => a + b;
let array = [1, 2, 3, 4, 5, 100, 6, 9, 1100];
array.sort((a, b) => a - b);

// setTimeout(() => console.log("Hello"), 1000);
// setInterval(() => console.log("Hello"), 1000);

// JSON 方法
let userStringify = JSON.stringify(user);
// array
let userParse = JSON.parse(userStringify);

console.log(userStringify);
console.log(userParse);

// this
user.sayName();

// Promise, fetch 和 Async/await
let url = 'https://jsonplaceholder.typicode.com/todos/1'

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json)).catch(err => console.log(err));

async function f(){
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}
f()
// axios.post(url).then(res => console.log(res.data))

// let promise = new Promise((resolve, reject) => {})

// 在浏览器中储存数据
// 1. cookie
// 2. localStorage
// 3. sessionStorage
localStorage.setItem('name', 'John');
localStorage.getItem('name'); // john
localStorage.removeItem('name');
localStorage.clear()

// store.js

// 跨域
// flask-CORS