//timeout and interval
console.log("Antes");

setTimeout(() => {
  console.log("Timeout");
}, 1000);

setInterval(() => {
  console.log("Intervalo");
}, 3000);


setInterval(() => {
    const clock = new Date ();
    //console.log(clock. toLocaleTimeString());
}, 1000);

console.log("Depois");

// promises

const urlAPI = "https://jsonplaceholder.typicode.com";

fetch(urlAPI + "/users").then((response) => response.json())
.then((data) => console.log(data));

console.log("Final ");

for (let i = 0; i < 20000; i++) {
    console.log("Timeout");
    
}
setTimeout(() => {
    console.log("Timeout!");
}, 1000);