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

const IBB_Mark = Mark.IBMHandel();
const IBM_John = John.IBMHandel();

console.log("IMB of Mark's: " + IBB_Mark)
console.log("IMB of John: " + IBM_John)


if(IBB_Mark > IBM_John){
    console.log("Mark's BMI is higher than John's!")
}else{
    console.log("John's BMI is higher than Mark's!")
}

if(IBB_Mark > IBM_John){
    console.log(`Mark's BMI ${IBB_Mark} is higher than John's ${IBM_John}!`)
}else{
    console.log(`John's ${IBM_John}! is higher than Mark's BMI ${IBB_Mark}!`)
}