const MatBtn = document.querySelector("#sign-in-btn");
const LoginBtn = document.querySelector("#log-in-btn");
const divBtn = document.querySelector("botoes");
class usuario  {
    constructor (user, password, log){
        this.user = user;
        this.password = password;
        this.log = log;
    }
}
let userAdmin = new usuario("admin", "admin", false);
let Wesley = new usuario("wesley", "wesley", true);
localStorage.setItem(userAdmin.user, JSON.stringify(userAdmin));
localStorage.setItem(Wesley.user, JSON.stringify(Wesley));
console.log(localStorage);

const pegaItem = function(key){
    return JSON.parse(localStorage.getItem(key));
}

const logado = function(key){
    let usr = JSON.parse(localStorage.getItem(key));
    if(usr.log === true){
        return 1;
    }
}



window.addEventListener("load", function(){
    let obj = Object.keys(localStorage);
    obj.forEach(element => {
        let resposta = logado(element);
        if(resposta===1){
            let loggedUser = pegaItem(element);
            MatBtn.remove();
            LoginBtn.remove();
            console.log(loggedUser); 
        }     
        else{
            console.log('Não logado')
        }   
    });    
    });





