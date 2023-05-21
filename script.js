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

const selecaoDeMedico = document.querySelector("#selecaoDeMedico"),
selectBtn = selecaoDeMedico.querySelector("#botaoDeMedico"),
searchInp = selecaoDeMedico.querySelector("input"),
options = selecaoDeMedico.querySelector(".options");

let medicos = ["----SELECIONE----", "CLINIK - PEDIATRA JULIANA PAIVA", "CLINIK - DEMATOLOGISTA DHIEGO RAMALHO",
"CLINIK - CLINICA MÉDICA - IRVING PEREIRA", "CLINIK - ULTRASSONOGRAFIA - IRVING PEREIRA", "CEM - PSICOLOGA ANNECY INÁCIO",
"ESPAÇO ACOLHER - PSICOLOGA ANA ALINE FONSECA", "ESPAÇO ACOLHER - PSICOLOGA ANA CLAUDIA", "ESPAÇO ACOLHER - PSICOLOGA ANGELICA DE SOUZA",
"ESPAÇO ACOLHER - PSICOLOGA CLAUDIA COSTA", "ESPAÇO ACOLHER - PSICOLOGA FRANCIANE REZENDE", "ESPAÇO ACOLHER - PSICOLOGA JOELMA PEREIRA",
"ESPAÇO ACOLHER - PSICOLOGA PATRICIA DINIZ", "ESPAÇO ACOLHER - PSICOLOGA MARINALVA LIMA", "ESPAÇO ACOLHER - PSIQUIATRA NIEDSON MEDEIROS",
"ESPAÇO ACOLHER - FONOAUDIOLOGIA TEREZA CRISTINA FERRAZ", "ESPAÇO ACOLHER - NEUROPSICOPEDAGOGIA SUZYLENE QUEIROZ",
"ESPAÇO ACOLHER - FISIOTERAPIA STEPHANIE VIEIRA", "ESPAÇO ACOLHER - NUTRICIONISTA TAMIRYS SILVA", "ESPAÇO ACOLHER - PODOLOGA CEIÇA PEREIRA",
"ESPAÇO ACOLHER - PSICANALISTA JOSINEIDE VIEIRA", "ESPAÇO ACOLHER - PSICANALISTA GENILDA CARVALHO", "CARDIOLOGISTA JAIFÁBIO LIMA",
"CIRURGIÃO VASCULAR RANIERE SOARES", "GINECOLOGISTA LARISSA ARAUJO", "GINECOLOGISTA JOÃO GOMES DE MAGALHÃES",
"GINECOLOGISTA JOSÉ FERDINANDO FEITOSO", "DR. KLEBER CANTARELLI P.ANDRADE", "MULTICLÍNICA & LABORATÓRIO SUZIANNE BRANDÃO",
"TENCOR SERVIÇOS MÉDICOS"];

function addMedico(medicoSelecionado) {
    options.innerHTML = "";
    medicos.forEach(medico => {
        let isSelected = medico == medicoSelecionado ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${medico}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addMedico();

function updateName(selectedLi) {
    searchInp.value = "";
    addMedico(selectedLi.innerText);
    selecaoDeMedico.classList.remove("is-active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = medicos.filter(data => {
        return data.toLowerCase().includes(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! medico not found</p>`;
});

selectBtn.addEventListener("click", () => selecaoDeMedico.classList.toggle("is-active"));