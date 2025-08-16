
//form => enviar dados
//form action => para onde os dados serão enviados
//form method => como estes dados serão enviados [GET(url)/POST(oculto)]
//button type submit => é um botão que serve para enviar os dados do formulário

document.getElementById("alterarSenhaForm").addEventListener("submit", function(e){

//prevent => prevenir
//default => padrão
//prevenindo o comportamento padrão do form(enviar os dados para algum lugar)
//ignorando o envio

    e.preventDefault();
    const novaSenha = document.getElementById("novaSenha").value;
    const confirmacaoNovaSenha = document.getElementById("confirmarNovaSenha").value;
    console.log(novaSenha);

    if(novaSenha !== confirmacaoNovaSenha){
        alert("Nova Senha e Confirmação diferentes, tente novamente!")
    }else{
        alert("Senha alterada com sucesso");
        window.location.href = "login.html";
    }
});