const MatBtn = document.querySelector("sign-in-btn");
const LoginBtn = document.querySelector("log-in-btn");

class usuario  {
    constructor (user, password, log){
        this.user = user;
        this.password = password;
        this.log = log;
    }
}
let userAdmin = new usuario("admin", "admin", true);
let Wesley = new usuario("wesley", "wesley", true);
localStorage.setItem(userAdmin.user, JSON.stringify(userAdmin));
localStorage.setItem(Wesley.user, JSON.stringify(Wesley));
console.log(localStorage);

const pegaItem = function(key){
    return JSON.parse(localStorage.getItem(key));
}

let logado = function(){
    let obj = Object.keys(localStorage);
    obj.forEach(element => {
        let usr = JSON.parse(localStorage.getItem(element));
        if(usr.log === true){
            //console.log(usr.user);
            return element;
        }
    console.log("Passou pelo IF");
    return 0;
    });
}


window.addEventListener("load", function(){
    let key = logado();
    console.log(key);
    let usr = JSON.parse(localStorage.getItem(key));
   // console.log(usr);
    if(key === true){ 
        console.log("Passou aqui");
        MatBtn.remove();
        LoginBtn.remove();
    }
    
})





