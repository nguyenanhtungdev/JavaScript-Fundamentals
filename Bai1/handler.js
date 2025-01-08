var massMark = 79;
var massJorn

class Persion{
    constructor(namePersion,mass,height){
        this.namePersion = namePersion;
        this.mass = mass;
        this.height = height;
    }
    IBMHandel() {
        return this.mass / (this.height * this.height);
      }
}

const Mark = new Persion("Mark's",78, 1.69)
const John = new Persion("John",92, 1.95)

console.log("IMB of Mark's: " + Mark.IBMHandel())
console.log("IMB of John: " + John.IBMHandel())

let markHigherBMI = false;

if(Mark.IBMHandel() > John.IBMHandel()){
    markHigherBMI = true;
}

console.log("Check mark with John: " + markHigherBMI) 