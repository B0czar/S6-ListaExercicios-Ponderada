//Kizzy, para melhor visualização e teste, criei esse arquivo separado para a questão 9. (Para ler a resposta melhor, use "Alt + Z" no Visual Studio Code).

//9. O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

const num = [1, 2, 3, 4]; // Array com 4 números do problema.

function somaArray(numeros) {
    // Declara a variável 'soma' e inicializa com 0 (Aqui que vão ficar os valores somados)
    let soma = 0;

    // Usa ".length" para pegar o tamanho do array e declara 'i' como 0. Enquanto 'i' for menor que o tamanho do array, ele vai incrementar 'i' em 1. 'i' esta sendo usado para percorrer o array.
    for (let i = 0; i < numeros.length; i++) {
        //'soma' esta recebendo o valor dela mesma mais o dobro do valor do array na posição 'i'.
        soma += 2 * numeros[i];
    }
    // Retorna o valor da variável 'soma' que é a soma do dobro dos números do array.
    return soma;
}

// Console.log que chama a função 'somaArray' passando o array 'num' como parâmetro e imprime o resultado.
console.log(somaArray(num)); // Saída: 20

/* 
Erros corrigidos por mim: 

1. O uso de .size no lugar de .length.
2. A declaração de i fora do loop.
3. Soma virava o valor dobrado de cada elemento, mas não acumulava os valores.
*/