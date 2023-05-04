class Roda {

  constructor(pressao, aro, pneu, teste) {
    this._pressao = pressao;
    this._aro = aro;
    this._pneu = pneu;
    this._teste = teste;
  }

  showData() {
    console.log('Pressão: ' + this._pressao);
    console.log('Aro: ' + this._aro);
    console.log('Pneu: ' + this._pneu);
    console.log('teste: ' + this._teste);
  }

  setPressao(pressao) {
    this._pressao = pressao;
  }

  getPressao() {
    return this._pressao;
  }

  setAro(aro) {
    this._aro = aro;
  }

  getAro() {
    return this._aro;
  }

  setPneu(pneu) {
    this._pneu = pneu;
  }

  getPneu() {
    return this._pneu;
  }

  setTeste(teste) {
    this._teste = teste;
  }

  getTeste() {
    return this._teste;
  }

}
