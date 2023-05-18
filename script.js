function handleSelectChange(event) {
    var selectElement = event.target
    var value = selectElement.value
    
    var cnpj = document.getElementById('cnpj')
    cnpj.value = value

    var endereco = document.getElementById('cnpj')

}
function carregarCNPJeEndereco(event) {

    
    var value = selectElement.value

    var medicos = document.getElementById('medicos').value
    var valor = medicos.value
    var cnpj = document.getElementById('cnpj')
    
    console.log(valor)
    cnpj.value = valor
}

function imprimir() {
    botao = document.getElementById("imprimirButton")
    botao.style.visibility = "hidden"
    window.print()
    botao.style.visibility = ""
}