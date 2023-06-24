const body = document.querySelector("body");
let MatBtn = document.querySelector("#sign-in-btn");
const LoginBtn = document.querySelector("#log-in-btn");
const divBtn = document.querySelector(".botoes");
class usuario  {
    constructor (user, password, log){
        this.user = user;
        this.password = password;
        this.log = log;
    }
}


const adicionaUser = function(user, password, ver){
    let NovoUsuario = new usuario(user, password, ver);
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
                location.reload();
                
            });
        
                
                
             
               
        }     
        }); 
            MatBtn.addEventListener("click", function(){
                    let modal = document.createElement("dialog");
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
                    MatriculaBtn.addEventListener('click', function(){
                        let novoUsername = MatUsr.value;
                        let novoPassword = MatPas.value
                        if(novoUsername !== '' && novoPassword !== ''){
                            adicionaUser(novoUsername, novoPassword);
                            alert("Usuário matriculado, faça o login para acessar!");
                            modal.close();
                        }
                        else{
                            alert("Digite as informações!")
                        }
                    })
                });
                LoginBtn.addEventListener("click", function(){
                let modal = document.createElement("dialog");
                body.appendChild(modal);
                let LoginUsr = document.createElement('input');
                let LoginPas = document.createElement('input');
                let LogarBtn = document.createElement("button");
                LogarBtn.style.width = '100px';
                LogarBtn.textContent = "Login";
                LogarBtn.style.marginLeft = '250px';
                LogarBtn.style.marginTop = '20px';
                LoginPas.style.marginLeft = '10px'
                LoginUsr.placeholder = "Usuário";
                LoginPas.placeholder = "Senha";
                LoginUsr.style.marginTop = '25px'
                LoginUsr.style.width = '285px';
                LoginPas.style.width = '285px';
                modal.style.width = '600px';
                modal.style.height = '120px';
                modal.appendChild(LoginUsr);
                modal.appendChild(LoginPas);
                modal.appendChild(LogarBtn);
                modal.showModal();
                LogarBtn.addEventListener('click', function(){
                    let LogUser = LoginUsr.value;
                    let LogPas = LoginPas.value;
                    if(LogUser !== '' && LogPas !== ''){
                        let logUsuario = pegaItem(LogUser);
                        if(logUsuario === null){
                            alert("Usuário não encontrado!")
                        }
                        if(LogPas === logUsuario.password){
                            adicionaUser(LogUser, LogPas, true);
                            location.reload();
                            modal.close();
                        }
                        else{
                            alert("Senha incorreta! Tente novamente.");
                        }
                    }
                    else{
                        alert("Informe o usuário e a senha");
                    }
                
                })
            })


    
});






