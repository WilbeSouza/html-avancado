document.getElementById("forgot-Form").addEventListener("submit", function (e){
    e.preventDefault();

        const email = document.getElementById("email").value.trim();
        if(email === "aluno@hotmail.com"){
            window.location.href = "trocar-senha.html";
        }else if(email === ""){
            alert("E-mail deve ser preenchido");
        }else{
            alert("E-mail Inválido");
        }
});