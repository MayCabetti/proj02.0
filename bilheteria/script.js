let idade = Number(prompt("Digite sua idade:"));
let estudante = prompt("Você é estudante? (sim/não)");

let preco = 40;

if (idade < 12 || idade > 60 || estudante.toLowerCase() === "sim") {
    preco = 20;
}

alert(`O valor do ingresso é R$ ${preco}`);

