let formulario = document.forms.formulario;
 
formulario.addEventListener('submit', function(event){
 
    event.preventDefault();
 
    var dados = {};
    dados.login = formulario.login.value;
    dados.mensagem = formulario.mensagem.value;
     
    var dadosTexto = JSON.stringify(dados);
    //{ "login" : "kelvin" , "mensagem" : "OlÃ¡!" }
     
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'contato');
    xhr.setRequestHeader("Content-Type", "application/json");
     
    xhr.onload = function(){
        var mensagem = document.querySelector("div.alert");
        mensagem.classList.remove("invisible");
        mensagem.textContent = xhr.responseText;
        formulario.reset();
    }
 
    xhr.send(dadosTexto);
});