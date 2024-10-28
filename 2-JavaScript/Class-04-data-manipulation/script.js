// string

console.log("teste");

let concept = "prototype (chain)";
let myName = "Francisco Ferreira";

console.log(myName.__proto__);
console.log(myName.toLocaleLowerCase());
console.log(myName.toLocaleUpperCase());

console.log(myName.slice(2));
console.log(myName.slice(-3));
console.log(myName.slice(2, -3));

console.log(concept.length);
console.log(concept.indexOf("o", 5));

// number

let num1 = 234567723
let num2 = 5.43579
//  para descobrir a quantidade de números que está em num1 basta converte-lo para string
console.log(String(num1).length); //length indica posição dos caracteres
console.log(num2.toFixed(2));

console.log(Math.sqrt(81));
console.log(Math.pow(2, 10));


console.log(Math.abs(num2));
console.log(Math.trunc(num2));



 console.log(Math.round(5.5)); //0-4 arendonda para baixo 5-9 para cima 
 console.log(Math.ceil(5.001));  //o metodo ceil aredonda sempre para cima 
 console.log(Math.floor(5.999));  //o metodo floor aredonda sempre para baixo

 console.log(Math.random()); //número aleatório 
 console.log(Math.ceil(Math.random() * 10));  
 
 const times = ["Corithians", "Flamengo", "Vasco", "Fortaleza", "Ceará", "São Paulo"];
 const randomNumber = Math.floor(Math.random() * times. length);
 console.log(times[randomNumber]);
 

//num9 = nome;
//console.log(input("digite seu num9", "seja bem vindo ao script"));
