
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
    window.print()
    botao.style.visibility = ""
}

const selecaoDeMedico = document.querySelector("#selecaoDeMedico"),
selectBtn = selecaoDeMedico.querySelector("#botaoDeMedico"),
searchInp = selecaoDeMedico.querySelector("input"),
options = selecaoDeMedico.querySelector(".options");

let medicos = ["----SELECIONE----",
"CLINIK - PEDIATRA JULIANA PAIVA",
"CLINIK - DEMATOLOGISTA DHIEGO RAMALHO",
"CLINIK - CLINICA MÉDICA - IRVING PEREIRA",
"CLINIK - ULTRASSONOGRAFIA - IRVING PEREIRA",
"CEM - PSICOLOGA ANNECY INÁCIO",
"ESPAÇO ACOLHER - PSICOLOGA ANA ALINE FONSECA",
"ESPAÇO ACOLHER - PSICOLOGA ANA CLAUDIA",
"ESPAÇO ACOLHER - PSICOLOGA ANGELICA DE SOUZA",
"ESPAÇO ACOLHER - PSICOLOGA CLAUDIA COSTA",
"ESPAÇO ACOLHER - PSICOLOGA FRANCIANE REZENDE",
"ESPAÇO ACOLHER - PSICOLOGA JOELMA PEREIRA",
"ESPAÇO ACOLHER - PSICOLOGA PATRICIA DINIZ",
"ESPAÇO ACOLHER - PSICOLOGA MARINALVA LIMA",
"ESPAÇO ACOLHER - PSIQUIATRA NIEDSON MEDEIROS",
"ESPAÇO ACOLHER - FONOAUDIOLOGIA TEREZA CRISTINA FERRAZ",
"ESPAÇO ACOLHER - NEUROPSICOPEDAGOGIA SUZYLENE QUEIROZ",
"ESPAÇO ACOLHER - FISIOTERAPIA STEPHANIE VIEIRA",
"ESPAÇO ACOLHER - NUTRICIONISTA TAMIRYS SILVA",
"ESPAÇO ACOLHER - PODOLOGA CEIÇA PEREIRA",
"ESPAÇO ACOLHER - PSICANALISTA JOSINEIDE VIEIRA",
"ESPAÇO ACOLHER - PSICANALISTA GENILDA CARVALHO",
"CARDIOLOGISTA JAIFÁBIO LIMA",
"CIRURGIÃO VASCULAR RANIERE SOARES",
"GINECOLOGISTA LARISSA ARAUJO",
"GINECOLOGISTA JOÃO GOMES DE MAGALHÃES",
"GINECOLOGISTA JOSÉ FERDINANDO FEITOSO",
"DR. KLEBER CANTARELLI P.ANDRADE",
"MULTICLÍNICA & LABORATÓRIO SUZIANNE BRANDÃO",
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
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Ops! contratado não encontrado</p>`;
});

selectBtn.addEventListener("click", () => selecaoDeMedico.classList.toggle("is-active"));

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







// Esse é o código para o gatilho do popup de cadastro

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.toggle('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.querySelector('.modal');
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button, button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
      if (e.keyCode === 13) { // Escape key
        closeAllModals();
      }
    });
  });

  
// Adicionando novos contratados (por enquanto não está funcionando 100% porque preciso armazenar os dados ainda)
function adicionarContratado() {
    let novoNome = document.querySelector('#novoNome').value.toUpperCase();
    let novoCnpj = document.querySelector('#novoCnpj').value;
    let novoEndereco = document.querySelector('#novoEndereco').value;

    let nome = document.querySelector('#contratado');
    let cnpj = document.querySelector('#cnpj');
    let endereco = document.querySelector('#endereco');

    nome.innerHTML = novoNome;
    cnpj.value = novoCnpj;
    endereco.value = novoEndereco;
}