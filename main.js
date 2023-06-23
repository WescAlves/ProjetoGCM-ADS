const body = document.querySelector("body");
const MatBtn = document.querySelector("#sign-in-btn");
const LoginBtn = document.querySelector("#log-in-btn");
const divBtn = document.querySelector(".botoes");
class usuario  {
    constructor (user, password, log){
        this.user = user;
        this.password = password;
        this.log = log;
    }
}
let userAdmin = new usuario("admin", "admin", false);
let Wesley = new usuario("wesley", "wesley", false);
localStorage.setItem(userAdmin.user, JSON.stringify(userAdmin));
localStorage.setItem(Wesley.user, JSON.stringify(Wesley));
//console.log(localStorage);

const adicionaUser = function(user, password){
    let NovoUsuario = new usuario(user, password, false);
    localStorage.setItem(NovoUsuario.user, JSON.stringify(NovoUsuario));
}

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
            //console.log(loggedUser);
            MatBtn.remove();
            LoginBtn.remove();
            let p = document.createElement("p");
            p.textContent = `Bem vindo ${loggedUser.user}`
            p.id = 'welcome';
            divBtn.appendChild(p);
            let logoutBtn = document.createElement("button");
            logoutBtn.textContent = 'Sair da conta';
            divBtn.appendChild(logoutBtn);
            logoutBtn.addEventListener("click", function(){
                loggedUser.log = false;
                localStorage.setItem(loggedUser.user, JSON.stringify(loggedUser));
                console.log(loggedUser);
                p.remove();
                logoutBtn.remove();
                divBtn.innerHTML = '<button class="btn" id="sign-in-btn"><strong>Matricule-se</strong></button> <button class="btn" id="log-in-btn"><strong>Login</strong></button>'
            });    
        }     
        else{
            console.log('Não logado');
        }   
    });
    MatBtn.addEventListener("click", function(){
        console.log("Entrou no Matricule-se!!")
        let modal = document.createElement("dialog");
        console.log(modal);
        body.appendChild(modal);
        let MatUsr = document.createElement('input');
        let MatPas = document.createElement('input');
        let MatriculaBtn = document.createElement("button");
        MatriculaBtn.style.width = '100px';
        MatriculaBtn.textContent = "Matricular";
        MatriculaBtn.style.marginLeft = '250px';
        MatriculaBtn.style.marginTop = '20px';
        MatPas.style.marginLeft = '10px'
        MatUsr.placeholder = "Usuário";
        MatPas.placeholder = "Senha";
        MatUsr.style.marginTop = '25px'
        MatUsr.style.width = '285px';
        MatPas.style.width = '285px';
        modal.style.width = '600px';
        modal.style.height = '120px';
        modal.appendChild(MatUsr);
        modal.appendChild(MatPas);
        modal.appendChild(MatriculaBtn);
        modal.showModal();
        ;
        MatriculaBtn.addEventListener('click', function(){
            let novoUsername = MatUsr.value;
            let novoPassword = MatPas.value
            adicionaUser(novoUsername, novoPassword);
            modal.close();
            console.log(localStorage);
        })
    })
    

    });





