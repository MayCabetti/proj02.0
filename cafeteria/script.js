let valorPedido = Number(prompt("Insira o Valor do seu pedido:"));

if (valorPedido >= 50){
    let fidelidade = (prompt("Você possui nosso cartão fidelidade? (sim ou não)"));
    if (fidelidade === "sim"){
        let tem = valorPedido * 0.9;
        alert (`Certo. Seu novo valor é ${tem}`);
    } else {
        alert ("Ok. Você ganhou um cookie de brinde!");
    }
} else {
    alert ("Certo. Agradecemos por sua preferência!");
}

