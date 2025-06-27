alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
//console log foi imbutido para o desenvolvedor visualizar no devtools as respostas
console.log('valor do número secreto: ' + numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute nao for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        //a partir do momento que acerto o numero, o fluxo para de repetir
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
        console.log('valor do chute: '+ chute);
    } 
}
// Operador ternário tentativa maior que 1? é 'tentativas' senão (:) 'tentativa'
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto '${numeroSecreto}' com ${tentativas} ${palavraTentativa}.`);


/* if (tentativas > 1) {
    //template string, junta texto com valor
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
    } */







