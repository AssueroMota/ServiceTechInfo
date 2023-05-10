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
function Ok_NexT() {
    if (confirm(`Nome: ${nome.value}
    Email: ${email.value}
    Setor: ${Setor.value}
    Chamado solicitado: ${RelatoUser.value}

    Você Confirmar as informaçoes acima e deseja receber no seu Email cadastrado?
    `) == true) {
        alert('OK deu certo');
        setTimeout(() => { console.log("this is the first message") }, 1000);
    }
    else {
        alert('DEU ERRADO ELE CANCELOU!')
    }
}
function receber() {
    if (validNome == true || validEmail == true) {
        localStorage.setItem('nome', document.querySelector('#nome').value)
        localStorage.setItem('email', document.querySelector('#email').value)
        localStorage.setItem('Setor', document.querySelector('#Setor').value)
        localStorage.setItem('Urgencia', document.querySelector('#Urgencia').value)
        localStorage.setItem('RelatoUser', document.querySelector('#RelatoUser').value)
    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Preencha os campos corretamente';
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
}