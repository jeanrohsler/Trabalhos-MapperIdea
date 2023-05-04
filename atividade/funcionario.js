class Funcionario {
  constructor(salarioPorHora, horasTrabalhadas) {
    this._salarioPorHora = salarioPorHora;
    this._horasTrabalhadas = horasTrabalhadas;
  }

  setSalarioPorHora(salarioPorHora) {
    this._salarioPorHora = salarioPorHora;
  }

  getSalarioPorHora() {
    return this._salarioPorHora;
  }

  setHorasTrabalhadas(horasTrabalhadas) {
    this._horasTrabalhadas = horasTrabalhadas;
  }

  getHorasTrabalhadas() {
    return this._horasTrabalhadas;
  }


}

function calcularSalario () {
  return this._salarioPorHora * this._horasTrabalhadas;
}
