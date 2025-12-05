let listaNumerosAleatorios = [];
let numeroLimite = 50;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;
let numeroMaximo = 50;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'secret number');
    exibirTextoNaTela('p',`Choose a number between 1 and ${numeroMaximo}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log (chute == numeroSecreto);

    if(chute == numeroSecreto) { 
            exibirTextoNaTela('h1', 'acertou');
            let palavraTentativa = tentativas > 1 ? 'tries' : 'try';
            let mensagemTentativas = `You discovered the secret number with ${tentativas} ${palavraTentativa}`;
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
            console.log('esta funcionando')
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', `the secret number is bigger than ${chute}`);
        }
        else {
            exibirTextoNaTela('p', `the secret number is minor than ${chute}`);
        } tentativas++;
        limparCampo();  
    }
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumerosAleatorios.length;

if (quantidadeElementosLista == 10) {
    listaNumerosAleatorios = [];
}

    if (listaNumerosAleatorios.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        listaNumerosAleatorios.push(numeroEscolhido);
        console.log(listaNumerosAleatorios)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}






