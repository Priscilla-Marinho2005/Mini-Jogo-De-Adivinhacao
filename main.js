let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let maxTentativas = 10;
let historicoPalpites = [];

while (tentativas < maxTentativas) {
    let chute = Number(prompt("Tente adivinhar o número de 1 a 100:"));
    historicoPalpites.push(chute);
    tentativas++;

    if (chute < 1 || chute > 100 || isNaN(chute)) {
        alert("Digite um número válido entre 1 e 100");
        continue;
    };

    if(chute === numeroSecreto) {
        alert(`Você acertou!\n O número era ${numeroSecreto}\n Número de tentativas: ${tentativas}`);
        break;
    } else if (chute < numeroSecreto) {
        alert(`O número secreto é maior do que ${chute}`);
    } else {
        alert(`O número secreto é menor que ${chute}`);
    };

    if (tentativas === maxTentativas) {
        alert(`Você perdeu!\nO número de tentativas excedeu a 10.\nO número secreto era ${numeroSecreto}`);
    };

    console.log(historicoPalpites);
};
