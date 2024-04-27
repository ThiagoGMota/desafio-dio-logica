class heroi {
  nome;
  experienciaXP;

  constructor(nome, experienciaXP) {
    this.nome = nome;
    this.experienciaXP = experienciaXP;
  }

  verificarNivel() {
    if (this.experienciaXP <= 1000) {
      return " Ferro";
    } else if (this.experienciaXP >= 1001 && this.experienciaXP < 2000) {
      return " Bronze";
    } else if (this.experienciaXP >= 2001 && this.experienciaXP < 5000) {
      return " Prata";
    } else if (this.experienciaXP >= 5001 && this.experienciaXP < 7000) {
      return " Ouro";
    } else if (this.experienciaXP >= 7001 && this.experienciaXP < 8000) {
      return "Platina";
    } else if (this.experienciaXP >= 8001 && this.experienciaXP < 9000) {
      return "Ascendente";
    } else if (this.experienciaXP >= 9001 && this.experienciaXP < 10000) {
      return "Imortal";
    } else if (this.experienciaXP >= 10001) {
      return "Radiante";
    }
  }
}
let meuHeroi = new heroi("Thiago", 9798);
console.log(
  "O herói de nome " +
    meuHeroi.nome +
    " está no nível de " + meuHeroi.experienciaXP + " " +
    meuHeroi.verificarNivel()
);
