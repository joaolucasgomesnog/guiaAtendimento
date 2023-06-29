function preencherVale() {

    let nome = document.querySelector('#nome').value
    data = new Date().toLocaleDateString()
    let atendente = document.querySelector('#atendente')[document.querySelector('#atendente').selectedIndex].text
    let hora = new Date().toLocaleTimeString()

    document.querySelector('#nomeVale').innerText = nome
    document.querySelector('#dataVale').innerHTML = data
    document.querySelector('#emissorVale').innerHTML = atendente
    document.querySelector('#horaVale').innerHTML = hora
    document.querySelector('#codigo').innerHTML = `${data}${hora}`.replaceAll('/','').replaceAll(':','')

    if (nome == '') {
        window.alert('Não é possível emitir vale sem nome do cliente')
        return false
    }
    if (atendente == '----SELECIONE----') {
        window.alert('Não é possível emitir vale sem nome de um atendente')
        return false
    }
    else {
        return true
    }


}
function imprimir() {
    if (preencherVale()) {
        botao = document.getElementById("imprimirButton")
    window.print()
    }
}


function getData() {

    const date = new Date();

    let dia= String(date.getDate()).padStart(2, '0');

    let mes = String(date.getMonth()+1).padStart(2,"0");

    let ano = date.getFullYear();


    let dataLocal = `${ano}-${mes}-${dia}`;

    const dataInput = document.getElementById('dataInput');
    dataInput.value = dataLocal;
}

getData();
