var massMark = 79;
var massJorn;

class Team {
  constructor(nameTeam, listScore) {
    this.nameTeam = nameTeam;
    this.listScore = listScore;
  }

  AvgHandel() {
    var avg = 0;

    this.listScore.forEach(element => {
      avg += element;
    });

    return avg / this.listScore.length;  
  }
}

const Dolphins = new Team("Dolphins", [96, 108, 89]);
const Koalas = new Team("Koalas", [88, 91, 110]);


const avg_Dolphins = Dolphins.AvgHandel();
const avg_Koalas = Koalas.AvgHandel();


console.log(`Diem trung binh cua Dolphins: ${avg_Dolphins}, diem trung binh cua Koalas: ${avg_Koalas}`);


if (avg_Dolphins > avg_Koalas) {
  console.log("Dolphins win");
} else if (avg_Dolphins < avg_Koalas) {
  console.log("Koalas win");
} else {
  console.log("It's a draw");
}
