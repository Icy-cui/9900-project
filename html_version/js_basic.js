// Object 对象
let user = {
    name: 'user',
    age: 18,
}

// 箭头函数
let add = (a, b) => a + b;
let add1 = (a, b) => {
    return a + b;
}

let arr = [1,2,3]
arr.forEach(func)

setTimeout(() =>{}, 100)

// JSON 方法
let a = JSON.stringify(user)
let b = JSON.parse('{"name":"user","age":18}')

// This
let obj = {
    name: 'user',
    age: 18,

    sayHi(){
        console.log(this.name)
    }
}

user.sayHi()

object.method()

// Promise 链和 Async/await
let promise = fetch('api').then(function(response){
    if(response.status == 200){
        return response.text()
    } else {
        alert('error')
    }
}).catch(error => console.log(error))

// 在浏览器中储存数据
// 1. cookie
document.cookie = "user=joe"

localStorage
sessionStorage

// 跨域
CORS