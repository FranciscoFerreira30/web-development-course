//repetiçao, interaçao laços
let count = 0;
while (count < 10){
    count += 1;

    if (count >= 3 && count <= 7) {
        continue;
       // break; vai quebrar o laço 
    }

    if (count % 2 == 0) {
        console.log(count);
    }
}

for (let count = 0; count <= 10;count += 1) {
    console.log(count);    
}

const students = [
    {name: "Pelé", n1: 7, n2: 8},
    {name: "Vinínius jr.", n1: 8, n2: 6},
    {name: "Mané Garrincha", n1: 5, n2: 6},
    {name: "Kroos", n1: 9.1, n2: 10},
];

for (let i = 0; i < students.length; i++) {
    const avg = (students[i].n1 + students[i].n2) / 2;


   if (avg >= 7) {
    console.log(`${students[i].name} aprovado com média ${avg}`);
   }else{
    console.log(`${students[i].name} reprovado com média ${avg}`);

   }
}
console.log("End!")


