const n1 = 7;
const n2 = 9;
const n3 = 8;
const average = (n1 + n2 + n3) / 3;

console.log(average);

if (average >= 7) {
  console.log("Aprovado por média!");
} else if (average >= 3) {
  console.log("Em recuperção!");
} else {
  console.log("Aluno reprovado!");
}
