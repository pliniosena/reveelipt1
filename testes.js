
// 1- Calculadora de Soma:
// Escreva uma função em JavaScript que receba dois números como parâmetros e retorne a soma deles.

function somaDois(n, m) {
    const soma = n + m;
    console.log(soma);
}

// 2 - Verificar se um número é Par ou Ímpar:
// Escreva uma função em JavaScript que receba um número como parâmetro e retorne "Par" se o número for par e "Ímpar" se for ímpar.
function parImpar(x) {
    if (x % 2 == 0) {
        console.log("x é par")
    } else { console.log("x é impar"); }

}

// 3 - Maior de Dois Números:
// Escreva uma função em JavaScript que receba dois números como parâmetros e retorne o maior deles.

function compara(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        const optres = " os numeros tem mesmo valor"
        return optres;
    }
}
// 4 - Reverter uma String:
// Escreva uma função em JavaScript que receba uma string como parâmetro e retorne a string invertida.
function reverteTeste(texto) {
    let contrario = texto.reverse();
    console.log(contrario);
}

// 5 - Calcular Média de um Array:
// Escreva uma função em JavaScript que receba um array de números como parâmetro e retorne a média dos números no array.
function mediaArray(mediaArray) {
    const somaTodos = 0;
    for (let i = 0; i < mediaArray.length; i++) {
        somaTodos += mediaArray[i];
    }
    const resulMedia = somaTodos / mediaArray.length;
    console.log(resulMedia);

}

// 6 - Encontrar o Maior Número:
// Escreva uma função em JavaScript que receba um array de números como parâmetro e retorne o maior número presente no array.
function maiorValorIndice(arrayMaior) {

    const max = Math.max(arrayMaior);
    console.log(max);

}


// 7 - Contar Números Pares:
// Escreva uma função em JavaScript que receba um array de números como parâmetro e retorne o número de elementos pares no array.

function paresDoArray(paresArray) {

    const numeroDePares = 0;
    for (let i = 0; i < paresArray.length; i++) {
        if (paresArray[i] % 2 == 0) {
            numeroDePares++;
        }
    }
    console.log(`o array tem ${numeroDePares} numeros pares`);
}
// 8 - Somar os Elementos de um Array:
// Escreva uma função em JavaScript que receba um array de números como parâmetro e retorne a soma de todos os elementos do array.
function somaItensArray(somaDosItensArray) {
    const somaTotal = 0;
    for (let i = 0; i < somaDosItensArray.length; i++) {
        somaTotal += somaDosItensArray[i];
    }
    console.log(somaTotal);

}

// 9 - Ordenar Números em Ordem Crescente:
// Escreva uma função em JavaScript que receba um array de números como parâmetro e retorne um novo array com os números ordenados em ordem crescente.
function ordenacaoArray(meuArray) {
    const ordenado = meuArray.sort();
    console.log(ordenado);
}
// 10 - Calcular Média de Idades:
// Escreva uma função em JavaScript que receba um array de objetos, onde cada objeto representa uma pessoa com uma propriedade 'idade', e retorne a média das idades.