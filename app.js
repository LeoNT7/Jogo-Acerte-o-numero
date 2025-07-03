// let titulo = document.querySelector('h1')
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector('p')
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
// boas praticas de fazer
//cria uma lista vazia
let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAletorio();
let tentativas = 1;

// função que faz o texto ser alterado com innerHTML
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag); // procura a tag
    campo.innerHTML = texto; // coloca o texto dentro da tag
    // leitor de tela com voz, alternativa Web Speech API
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();


function verificarChute() {
    // retorna o valor (.value)
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        

        // variavel com validação ternária para exibir tentativa no singular ou plural
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        // variavel que carrega a template string a ser exibida no caso de acerto
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        //pega o botao e remove o atributo 'desativado'
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // Se errar:
        // mostra se o número é maior ou menor e incrementa tentativa
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        //dentro do else, adiciona valor a cada iteração para a variavel tentativas
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAletorio() {
    //O +1 é necessário pra não gerar zero.
    //O parseInt garante que não será um número com casas decimais.
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    //.length verifica a quantidade de itens na lista
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    //.includes verifica se o elemento está na lista e retorna true
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        //recursão, chama a função gerar numero aleatorio caso o número verificado acima ja esteja na lista
        return gerarNumeroAletorio();
    } else  {
        //push adiciona o numero escolhido ao final da lista
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
// função que limpa o input do chute a cada iteração
function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

// função traz variaveis e funções necessárias para reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAletorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    //pega o botao e adiciona o atributo 'desativado'
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
