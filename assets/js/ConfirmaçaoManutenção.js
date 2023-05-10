
today = new Date();
let h = String(today.getHours()).padStart(2, '0');
let m = String(today.getMinutes()).padStart(2, '0');
let s = String(today.getSeconds()).padStart(2, '0');
const myDate = new Date().toLocaleDateString();
console.log(myDate);
const myInput = document.querySelector("#dataToday");
myInput.value = myDate + "  " + h + ":" + m;
console.log(myInput.value);
let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false;
email.addEventListener('keyup', () => {
    if (document.forms[0].email.value == ""
        || document.forms[0].email.value.indexOf('@') == -1
        || document.forms[0].email.value.indexOf('.') == -1 || document.forms[0].email.value.length == 0) {
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'Email Invalido '
        email.setAttribute('style', 'border-color: red')
        return false;
    }
    else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'E-MAIL ACEITO..'
        email.setAttribute('style', 'border-color: green')
        return true;
    }
}
)
var Urgencia = document.querySelector('#Urgencia')

document.querySelector("#nome").value = localStorage.getItem("nome");
document.querySelector('#email').value = localStorage.getItem("email");
document.querySelector('#Setor').value = localStorage.getItem("Setor");
document.querySelector('#Urgencia').value = localStorage.getItem("Urgencia");
document.querySelector('#RelatoUser').value = localStorage.getItem("RelatoUser");

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false;
let msgError = document.querySelector('#erro');
let msgSuccess = document.querySelector('#acerto');
var textarea_2 = document.querySelector('#textarea_2');
var Setor = document.getElementById('Setor');
var textarea = document.querySelector('#textarea');
var Urgencia = document.querySelector('#Urgencia')

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 4) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Minimo de 5 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome Valido!'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

var textarea_2 = document.querySelector('#textarea_2');
var Setor = document.getElementById('Setor');
var textarea = document.querySelector('#textarea');
var ele = document.getElementsByName('Urgência');

// Inserção de email
var New_Mailer = document.querySelector('.New_Mailer');
New_Mailer.innerHTML = `<input type="hidden" name="_cc" value="${email.value}" class="EmailCopia"></input>`


//INFORMATIVO DE PRAZO 
var Prazo = document.querySelector('.Prazo');
Prazo.innerHTML = `<input type="text" name="PRAZOS DE ATENDIMENTO" value="Muito Urgente: 2hrs, Urgência Moderada: 24 hrs e Pouca Urgência: 48 hrs."/>`

// Pergunta de Confirmação Sim ou Não
var ConfirmaCao = confirm(`Confirmar as Informações abaixo \n
Nome:  ${nome.value}
Email:  ${email.value}
Setor:  ${Setor.value}
Urgencia: ${Urgencia.value}
Descrição do Chamado:  ${RelatoUser.value}`
)
if (ConfirmaCao == true) {
    let form = document.querySelector(".enviarForm-1");
    form.click();
    let Main = document.querySelector('.Main');
    Main.setAttribute('style', 'display:none');
    let msgSuccess = document.querySelector('#msgSuccess')
    msgSuccess.setAttribute('style', 'display: block')
    let img = document.querySelector('.img');
    setTimeout(() => {
        console.log("Delayed for 1 second.");
        msgSuccess.innerHTML = `Aguarde.`;
        img.innerHTML = `<img src="mail-download.gif">`
    }, "500")
    setTimeout(() => {
        console.log("Delayed for 2 second.");
        msgSuccess.innerHTML = `Aguarde..`;
        img.innerHTML = `<img src="mail-download.gif">`
    }, "800")
    setTimeout(() => {
        console.log("Delayed for 3 second.");
        msgSuccess.innerHTML = `Aguarde...`;
        img.innerHTML = `<img src="mail-download.gif">`
    }, "1000")
    setTimeout(() => {
        console.log("Delayed for 4 second.");
        msgSuccess.innerHTML = `Enviando Email.`;
        img.innerHTML = `<img src="mail-download.gif">`
    }, "1200")
    setTimeout(() => {
        console.log("Delayed for 5 second.");
        msgSuccess.innerHTML = `Enviando Email..`;
        img.innerHTML = `<img src="mail-download.gif">`
    }, "1400")
    setTimeout(() => {
        console.log("Delayed for 6 second.");
        msgSuccess.innerHTML = `Enviando Email...`;
        img.innerHTML = `<img src="mail-download.gif">`
    }, "1900")
    setTimeout(() => {
        console.log("Delayed for 7 second.");
        msgSuccess.innerHTML = `Email Enviado.`;
        img.innerHTML = `<img src="emailFim.jpg">`
    }, "2100")
    setTimeout(() => {
        window.location.href = "https://litoraneus-ti.github.io/TechLito/index.html"
    }, "2500")
}
else {
    alert('Depois das alteraçoes clique em Enviar')
};