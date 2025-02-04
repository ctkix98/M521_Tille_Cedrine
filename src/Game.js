import Answer from "./Answer";

class Game {
  #game = [];

  constructor(tentative) {
    this.nbrTentative = tentative;
  }

  creerAnswer() {
    for (let i = 0; i < this.nbrTentative; i++) {
      const answer = new Answer();
      answer.creerFormulaire();
     //if (i = 0) {
     //   answer.switchInert();
     // }
      this.#game.push(answer);
    }
  }

   displayMessage = (message) => {
    document.querySelector(".message").textContent = message;
  };

}
export default Game;
