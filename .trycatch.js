// const nome = "Harlitoo"; // declara a variavel nome. somente leitura

// try {//o try não paraliza o codigo. Ele consegue continuar
//     nome = "Hugo"; 
// } catch (ERRO) {
//     console.error("Ops! A Variável somente leitura 'nome' não pode ser alterada. Veja o erro: "+ ERRO); //console manda uma mensagem de erro. informação personalizada
// }

// console.log("Teste");

// nome = "Batata";
// //quando tenta executar cod ilegal js ele interrompe e não deixa continuar a exe do script
// console.log("Teste2");

function FazerLogin() {
    let usuario = document.getElementById("txtLogin");
    let senha = document.getElementById("txtSenha");
    try{
        if (usuario.value !== "usuario123") {// quando tem um sinal de "!" no operador de comparação, significa que é diferente
            usuario.focus();
            throw new Error("Error: Usuário Inválido.");
        }
        if (senha.value !== "senha123") {
            senha.focus();
            throw new Error("Error: Senha Incorreta.");
        }
        console.log("login realizado com sucesso.");
    } catch (erro) { // encerramento do bloco de codigo do console
        console.error(erro.message);
    }
}