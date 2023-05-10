
let cpf = document.querySelector('#campo_cpf')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false;
let value_cpf = document.querySelector('#campo_cpf');
value_cpf.addEventListener("keydown", function (e) {
    if (e.key > "a" && e.key < "z") {
        e.preventDefault();
    }
});
value_cpf.addEventListener("blur", function (e) {
    //Remove tudo o que não é dígito
    let validar_cpf = this.value.replace(/\D/g, "");
    // verificação da quantidade números
    if (validar_cpf.length == 11) {
        // verificação de CPF valido
        var Soma;
        var Resto;
        Soma = 0;
        for (i = 1; i <= 9; i++) Soma = Soma + parseInt(validar_cpf.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(validar_cpf.substring(9, 10))) return alert("CPF Inválido ou Não Existe!");;
        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(validar_cpf.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(validar_cpf.substring(10, 11))) return alert("CPF Inválido ou Não Existe!");;
        //formatação final
        cpf_final = validar_cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf_final = cpf_final.replace(/(\d{3})(\d)/, "$1.$2");
        cpf_final = cpf_final.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        document.getElementById('campo_cpf').value = cpf_final;
        labelCpf.setAttribute('style', 'color: Green')
        labelCpf.innerHTML = 'CPF Valido !'
        validCpf = true
    } else {
        labelCpf.setAttribute('style', 'color: red')
        labelCpf.innerHTML = 'CPF Inválido ou Não Existe !'
        validCpf = false
    }
})

function validar() {
    if (cpf.value == '' || validCpf == false) {
        alert('CPF INVALIDO OU INESXISTENTE')
    }
    if (validCpf) {
        var name = window.prompt("Digite a Palavra-Chave: ");
        if (name.match(/litoraneus/i)) {
        window.location.href = "adm.html";
        } else if (name.match(/[0-9]+/)) {
            alert('A senha do administrador não contém numeros, Tente Novamente !');
            validar();
        } else if (name != "litoraneus") {
            alert('Senha Incorreta, Tente Novamente');
            validar();
        }
    }
}
