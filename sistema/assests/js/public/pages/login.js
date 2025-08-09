document.getElementById("loginForm").addEventListener("submit", function (e){
    e.preventDefault();
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if(usuario === "root" && senha === "admin"){
        window.location.href = "admin/dashboard"
    }else{
        alert("Credenciais invalidas. Tente Novamente.")
    }
})