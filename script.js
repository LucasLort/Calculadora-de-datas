function calcular() {
  const dataInput = document.getElementById("valorInicialDiferenca");
  const dataValor = dataInput.value;
  const dataInicial = dataValor + "T10:30:00-03:00";

  const dataStart = new Date(dataInicial);
  const dataInputFinal = document.getElementById("valorFinalDiferenca");
  const dataValorFinal = dataInputFinal.value;
  const dataFinal = dataValorFinal + "T10:30:00-03:00";

  const dataEnd = new Date(dataFinal);
  const resultado = dataEnd - dataStart;
  //dividir ms      ms        s     m     h    d
  const time = resultado / 1000 / 60 / 60 / 24;
  const mostrarResultado = document.getElementById("resultadoSoma");
  mostrarResultado.innerHTML = "A diferença é de " + time.toFixed(0) + " dias";
}