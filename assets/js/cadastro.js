var btn_sair = document.querySelector('#btn_sair')
var btn_sair2 = document.querySelector('#voltar')
console.log(btn_sair)

btn_sair.onclick = function() {
    var confirm = window.confirm('Deseja sair ?')
    
    if(confirm == true){
        alert('Saindo 2')

        window.location.href = "./index.html"
    }
}

btn_sair2.onclick = function() {
    var confirm = window.confirm('Deseja sair ?')
    
    if(confirm == true){
        alert('Saindo 2')

        window.location.href = "./index.html"
    }
}