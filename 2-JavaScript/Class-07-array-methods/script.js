// map é uma funçao imutavel igual a string⭐
const number = [10, 20, 30];
 console.log(number.map((num) => num + 1));

const deves = [
    {nome: "Nereu", Salary: 6500},
    {nome: "Fred", Salary: 5800},
    {nome: "Neemias", Salary: 7000},
];

console.log(deves.map((dev) => {
    return dev;
}));
const newSalaries = (deves.map((dev) => dev.Salary * 1.1));
console.log(newSalaries);

console.log(deves);