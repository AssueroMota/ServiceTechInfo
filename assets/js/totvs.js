let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false;
today = new Date();
h = today.getHours();
m = today.getMinutes();
s = today.getSeconds();
const myDate = new Date().toLocaleDateString();
console.log(myDate);
const myInput = document.querySelector("#dataToday");
myInput.value = myDate + "  " + h + ":" + m;
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
let Componente = document.querySelector('#Componente')
let labelComponente = document.querySelector('#labelComponente')
let validComponente = false;
Componente.addEventListener('keyup', () => {
    if (Componente.value.length <= 7) {
        labelComponente.setAttribute('style', 'color: red')
        labelComponente.innerHTML = 'Componete invalido! Exemplo: TRAFM060'
        Componente.setAttribute('style', 'border-color: red')
        validComponente = false
    }
    else {
        labelComponente.setAttribute('style', 'color: green')
        labelComponente.innerHTML = 'Componente Valido!'
        Componente.setAttribute('style', 'border-color: green')
        validComponente = true
    }
})
const addloaDing = () => {
    const button = document.querySelector('button');
    button.innerHTML = '<img src="loading.png" class="loading">';
}
let COD = document.getElementById('COD');
function soliCitar() {
    if (validComponente == true && validNome == true && COD.value != '') {
        addloaDing();
        setTimeout(() => {
            alert('Solicitação Enviada!')
        }, 500);
    }
    else {
        setTimeout(() => {
            alert('preencha todos os campos corretamente!');
        }, 500);
    }
}


