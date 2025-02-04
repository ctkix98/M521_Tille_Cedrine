class Answer {
  #formElement;
  constructor() {
    this.#formElement = document.createElement("form");
    this.#formElement.setAttribute("inert", "true");
    this.#formElement.classList.add("row");
    //this.#formElement.id.add("row")
  }

  //Générer le formulaire
  //récupérer le main
  creerFormulaire() {
    const main = document.querySelector(".board");
    //console.log(main)

    for (let i = 0; i < 5; i++) {
      const input = document.createElement("input");
      input.classList.add("letter");
      input.setAttribute("type", "text");
      input.setAttribute("name", `letter-${i}`);
      input.setAttribute("id", `row-0--${i}`);
      input.setAttribute("maxlenght", 1);
      this.#formElement.append(input);

      //}
    }
    const button = document.createElement("input");
    button.classList.add("type", "submit");
    button.setAttribute("type", "hidden");
    this.#formElement.append(button);

    main.append(this.#formElement);
    //mettre le formulaure inert
    //this.switchInert();
    //this.focus(0,0)
  }

  switchInert() {
    this.#formElement.removeAttribute("inert");
  }

  focus() {
    document.getElementsByClassName(`id-0--0`).focus();
  }

  isAlphaNumericKey(key) {
    return /^([\x30-\x39]|[\x61-\x7a])$/i.test(key);
  }

  getKey() {
    const inputs = document.querySelectorAll("input");
    //const input1 = this.#formElement.querySelector('input[name="text"]').value
    const input0 = document.querySelector('input[type="text"]');
    console.log(input0.value);

    //inputs.forEach(input =>{
    //  console.log(input.value)
    // })
  }

  //partie serveur I guess
  getTentative() {
    this.#formElement.addEventListener("keyup", (e) => {
      e.preventDefault();
      if (e.key === "Enter") {
        console.log("Hello le login");
        //const lettre1 = this.#formElement.querySelector(input)
      }
    });

    
  }

  doDataForm(){
    const a = "A"
    const b = "B"
    const c = "C"
    const d = "D"
    const e = "E"
    formData ={};
    formData ={
        letter :a,
        letter:b,
        letter:c,
        letter:d,
        letter:e,
    }
  }

  async getApi(dataForm) {
    try {



      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dataForm }), // Envoie un objet JSON avec email et password
      };
      //console.log("Options de requête:", options); // <-- Log de l'objet fetch

      const response = await fetch(
        "https://progweb-wwwordle-api.onrender.com/guess",
        options
      );
      console.log("Statut de réponse:", response.status); // <-- Log du statut HTTP

      if (response.ok) {
        const data = await response.json(); // Extraire les données JSON de la réponse
        console.log(data); // Afficher les données dans la console (ou les utiliser)
        return data; // Retourner les données (par exemple, pour un traitement ultérieur)
      } else {
        // Si la requête a échoué (ex: erreur 400, 500, etc.)
        throw new Error("Erreur lors de la création du compte.");
      }
    } catch (error) {
      // Gestion des erreurs (problèmes réseau, etc.)
      console.error("Erreur:", error);
      throw error; // Relancer l'erreur si tu veux la gérer ailleurs
    }
  }
}
export default Answer;
