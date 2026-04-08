let valorCarro = Number(prompt("Insira o Valor do Carro:"));
let pagamento = Number(prompt("Insira o número da sua forma de pagamento: 1-Pix ; 2-Crédito ; 3-Financiamento"));

if (pagamento === 1){
    let pix = valorCarro * 0.85
    alert (`Você selecionou a opção Pix e recebeu 15% de desconto. Seu novo valor é ${pix}R$`);
} else if (pagamento ===2){
    let quantParcelaC = Number (prompt("Você selecionou a opção cartão de crédito, e pode parcelar em até 24x. Quantas parcelas gostaria? "));
    let credito = valorCarro * 1.05;
    let parcelasCredito = credito / quantParcelaC;
    alert (`Certo. Seu novo valor é ${credito}R$ com ${quantParcelaC}x de ${parcelasCredito}R$`);
} else if (pagamento === 3){
    let quantParcelaF = Number (prompt("Você selecionou a opção financiamento, e pode parcelar em até 48x. Quantas parcelas gostaria? "));
    let financiamento = valorCarro * 1.2;
    let parcelasFinan = financiamento / quantParcelaF;
    alert (`Certo. Seu novo valor é ${financiamento}R$ com ${quantParcelaF}x de ${parcelasFinan}R$`);
} else {
    alert ("Selecione uma opção válida. Comece novamente");
}

