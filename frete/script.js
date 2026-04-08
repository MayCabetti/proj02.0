let valorPedido = Number(prompt("Insira o Valor da sua compra:"));
let região = Number(prompt("Insira a região de entrega: 1-Sul ; 2-Sudeste ; 3-Outras"));

if (valorPedido >= 250) {
    alert (`Você foi premiado com frete grátis! Seu valor total é ${valorPedido}`);
} else {
    if (região === 1){
    let frete1 = valorPedido + 20;
    alert (`Você selecionou a região Sul, portanto seu valor total é ${frete1}R$`);
    } else if (região ===2){
    let frete2 = valorPedido + 10;
    alert (`Você selecionou a região Sudeste, portanto seu valor total é ${frete2}R$`);
    } else if (região === 3){
    let frete3 = valorPedido + 30;
    alert (`Você selecionou outras regiões, portanto seu valor total é ${frete3}R$`);
    }
}