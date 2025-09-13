let campoCpf = document.getElementById("cpf");

let mascaraOpcoes = {
    mask: "000.000.000-00"
};
let mascaraCpf = IMask(campoCpf, mascaraOpcoes);

function armazenarDadosHospede($event) {
    $event.preventDefault();

    let campoNome = document.getElementById("nome");
    let campoNascimento = document.getElementById("nascimento");
    let campoObservacoes = document.getElementById("observacoes");

    let nome = campoNome.value;
    let cpf = campoCpf.value;
    let nascimento = campoNascimento.value;
    let observacoes = campoObservacoes.value;
    debugger

    let id = crypto.randomUUID();

    let hospede = {
        id: id,
        nome: nome,
        cpf: cpf,
        nascimento: nascimento,
        observacoes: observacoes
    }

    let hospedes = carregarHospedesDoLocalStorage();
    hospedes.push(hospede);
    salvarLocalStorage(hospedes);

    window.location.href = "index.html"
}

function salvarLocalStorage(hospedes) {
    let hospedesString = JSON.stringify(hospedes);
    localStorage.setItem("hospedes", hospedesString);
}

function carregarHospedesDoLocalStorage() {
    let hospedesString = localStorage.getItem("hospedes");
    let hospedes = [];
    if (hospedesString !== null) {
        hospedes = JSON.parse(hospedesString);
    }
    return hospedes;
}
