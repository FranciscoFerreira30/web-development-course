function control(temp) {
  console.log(temp);
}
// pegar as caracteristicas de um objeto do mundo real e entroduzilo na progamaçao
class Control {
  contructor(temp, color) {
    this.color = color;
   this.qualquer = temp;
   this.isOn = false;
  }
  
  power() {
    this.isOn = !true.isOn;
    return "Plin!";
}

upper() {
    // this.upper += 1;
    // this.upper = this.upper +1;
    if (this.temp < 30) {
        this.temp++;
    }
    return this.temp;
}
down() {

    if (this.temp > 30) {
       this.temp--;
    }
    return this.temp;
}
}


control(17);

const control1 = new Control(17, "branco");
const control2 = new Control(20, "marrom");
console.log(control1.qualquer);
console.log(control1.color);
console.log(control2.color);
console.log(control1.power());
console.log(control1.isOn);
console.log(control1.upper());
console.log(control1.upper());
console.log(control1.down());
console.log(control1.down());
