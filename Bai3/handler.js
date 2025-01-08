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

function showHandler(Dolphins, Koalas){
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
}

function showHandler_1(Dolphins, Koalas){
    const avg_Dolphins = Dolphins.AvgHandel();
    const avg_Koalas = Koalas.AvgHandel();

    console.log(`Diem trung binh cua Dolphins: ${avg_Dolphins}, diem trung binh cua Koalas: ${avg_Koalas}`);

    var check_1 = avg_Dolphins >= 100;
    var check_2 = avg_Koalas >= 100;

    if (avg_Dolphins > avg_Koalas && check_1) {
    console.log("Dolphins win");
    } else if (avg_Dolphins < avg_Koalas && check_2) {
    console.log("Koalas win");
    } else if(check_1 || check_2){
    console.log("It's a draw");
    }
}
// Data 1
const Dolphins = new Team("Dolphins", [96, 108, 89]);
const Koalas = new Team("Koalas", [88, 91, 110]);
showHandler(Dolphins,Koalas);

// Data 1
const Dolphins_1 = new Team("Dolphins", [97, 112, 101]);
const Koalas_1 = new Team("Koalas", [109, 95, 123]);
showHandler_1(Dolphins_1,Koalas_1);

// Data 1
const Dolphins_2 = new Team("Dolphins", [97, 112, 101]);
const Koalas_2 = new Team("Koalas", [109, 95, 106]);
showHandler_1(Dolphins_2,Koalas_2);


