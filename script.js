"use strict"

/*
                MAP | FILTER | REDUCE

        1- somar 100 a cada elemento do Array;
            teste1- aplicar desconto de 50% nos itens;

        2- mostrar números < 20;
            teste2- mostrar números pares;

        3- somar todos os números;
            teste3- somar pares menores que 20;

*/

const numeros = [3, 12, 70, 21, 17, 2, 103]
    console.log("Array original", numeros)

//map
const soma100 = (valor) => valor + 100
const ex1 = numeros.map(soma100)
    console.log("Exercício 1", ex1)

const desconto = (valor) => valor * 0.5
const tst1 = numeros.map(desconto)
    console.log("Teste 1", tst1) 

//filter
const menor20 = (numero) => numero < 20
const ex2 = numeros.filter(menor20)
    console.log("Exercício 2", ex2)

const pares = (numero) => numero % 2 == 0
const tst2 = numeros.filter(pares)
    console.log("Teste 2", tst2)

//reduce
const total = (a, b) => a + b
const ex3 = numeros.reduce(total, 0)
    console.log("Exercício 3 >", ex3)


const tst3 = numeros.filter(pares).filter(menor20).reduce(total, 0)
    console.log("Teste 3 >", tst3)
