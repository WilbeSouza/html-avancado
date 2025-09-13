let segundos = 5;

const contadorElemento = document.getElementById("contagem");
const interval = setInterval(() => {
    segundos = segundos - 1;

    contadorElemento.textContent = segundos;
    if (segundos <= 0){
        clearInterval(interval);
        redirectNow();
    }
}, 1000);
function redirectNow(){
    windows.location.href = "../../login.html"
}