var user = "giovanni";
var senha = "123456"

var user2 = "rodrigo";
var senha2 = "123456"

var entrar = document.querySelector('#entrar')
var novo = document.querySelector('#novo')

var email = document.querySelector('#email')
var senha = document.querySelector('#senha')

entrar.onclick = () => {
    if(email.value !== user){
        alert('Usuario não encontrado')
        return false
    }
    window.location.href = "home.html"
    alert('Seja bem vindo ' + user)
}


novo.onclick = () => {
      window.location.href = "cadastrar.html"
}