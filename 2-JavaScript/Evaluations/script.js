// Avaliação JavaScript

// Questão 1 (Data Types):

// Declare as seguntes variáveis e atribua os valores por tipo:
// Sting, Number, Boolean, Function, Array, Object

// Questão 2 (Operators):

// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 2 e 3 e raiz quadrada de 144

// Questão 3 (Functions):

// Crie e execute uma função de nome "concat" que retorne "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno

// Questão 4 (Data Manipulation):

// Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro

// Questão 5 (for):

// Liste todos os valores do array criado na questão anterior ultilizando o for

// Questão 6 (while):

// Escreva os números de 0 a 100 sem os que pertencem à familía do 40, do 50 e do 60

// Questão 7 (if):

//Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa (quando estiver inferior à metade da máxima
// A velocidade da pista é de 60km/h

// Questão 8 (array methods):

//Uma empresa vai dar 10% de aumento para seus funcionários
//Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa

const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];

// question 1

let nome = "Francisco Ferreira";
let number = 17;
let isInformatica = true;
function soma (grade1, grade2) {
    return (grade1 + grade2) / 2;
}
console.log((5 + 6));
const bird = ["Arara", "Sariema", "Tucano"];
console.log(bird)

const deve = {nome: "Francisco", Salary: 8000};
console.log(deve);

// question 2
let num1 = 2;
let num2 = 3;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(Math.pow(num1, num2));
console.log(144 ** (1/2));


// question 3
function concat (arg) {
    return "JavaScript" + arg;
}
const arg = " é massa!";
console.log(concat(arg));

//question 4
const irmao = ["Francisco", "Fred", "Mauricio"];
irmao.pop();
irmao.push("Marcilio");
console.log(irmao);
irmao.unshift("Ravila");
irmao.shift();
