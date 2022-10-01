
// 原型模式
class User{
    constructor(name, email, phone, addr, password){
        this.setName(name);
        this.setEmail(email);
        this.setPhone(phone);
        this.setAddr(addr);
        this.setPassword(password);
    }
    setName(name){
        this.name = name;
    }
    setEmail(email){
        this.email = email;
    }
    setPhone(phone){
        this.phone = phone;
    }
    setAddr(addr){
        this.addr = addr;
    }
    setPassword(password){
        this.password = password;
    }
}

function init(){
    createForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        var user;
        try {
            let name = document.querySelector("[name=name]").value;
            let email = document.querySelector("[name=email]").value;
            let phone = document.querySelector("[name=phone]").value;
            let addr = document.querySelector("[name=address]").value;
            let password = document.querySelector("[name=password]").value;
            let confirmed_password = document.querySelector("[name=confirmed_password]").value;

            console.log(name, email, phone, addr, confirmed_password);

            if(password !== confirmed_password){
                throw new Error("两次输入的密码不一致");
            }

            user = new User();
            user.setName(name);
            user.setEmail(email);
            user.setPhone(phone);
            user.setAddr(addr);
            user.setPassword(password);

            console.log(user)

        }catch(e){
            console.log(e)
        }
    })
}


let createForm = document.getElementById('my-form')
init()