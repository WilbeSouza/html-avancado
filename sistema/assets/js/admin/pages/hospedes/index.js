let tbody = document.getElementById("tbody-hospedes");

function carregarHospedesDoLocalStorage() {
    let hospedesString = localStorage.getItem("hospedes");
    let hospedes = [];
    if (hospedesString !== null) {
        hospedes = JSON.parse(hospedesString);
    }
    return hospedes;
}

function listarHospedes(){
    let hospedes = carregarHospedesDoLocalStorage();
    //limpar as linhas do tbody
    tbody.innerHTML = "";

    for(let i = 0; i <hospedes.length; i++){
        let hospede = hospedes[i];
        /*console.log(hospede);*/
        criarLinha(hospede);
        
    }
}

function criarLinha(hospede){
    let linha = `<tr>
                    <td>${hospede.nome}</td>
                    <td>${hospede.cpf}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <a href="editar.html?id=${hospede.id}" class="btn"><i class="fa-solid fa-pencil"></i></a>
                        <button class="btn" onclick = "apagarHospede('${hospede.id}')"><i class="fa-solid fa-trash"></i></button>
                    </td>
                   </tr> `;
    tbody.innerHTML += linha;
}

function apagarHospede(idHospede){
    //Resgatar a lista de hospedes do local storage
    let hospedes = carregarHospedesDoLocalStorage();
    //filtrar o hospede que tem o id que deve ser apagado
    let hospedeParaApagar = hospedes.filter(x => x.id === idHospede)[0];
    //obter o indice do hospede que deve ser apagado
    let indiceHospedeParaApagar = hospedes.findIndex(x => x.id === idHospede);

    if(hospedeParaApagar === undefined)
        return

    confirmarExclusao(hospedeParaApagar, indiceHospedeParaApagar, hospedes);
    /*console.log(hospedeParaApagar)
    console.log(idHospede);*/
}

function salvarLocalStorage(hospedes){
    let hospedesString = JSON.stringify(hospedes);
    localStorage.setItem("hospedes", hospedesString);

}

listarHospedes();

function confirmarExclusao(hospede, indiceHospedeParaApagar, hospedes){
   
    const opcoesSwal = {
        title: `Deseja Realmente Apagar o Hospede '${hospede.nome}'?`,
        text: "Não tem como voltar atras!! ",
        icon: "warning",
        showDenyButton: true,
        confirmButtonColor: "#d33",
        denyButtonColor: "#3085d6",
        confirmButtonText: "SIM",
        denyButtonText:"NÃO",
        reverseButtons: true
    }
    Swal.fire(opcoesSwal).then((result) =>{
        if (result.isConfirmed){
            hospedes.splice(indiceHospedeParaApagar, 1);
            salvarLocalStorage(hospedes);
            listarHospedes();
          Swal.fire({
            title: "APAGADO!",
            text: "Hospede apagado com sucesso!.",
            icon: "success"
          });
        }
    });
}