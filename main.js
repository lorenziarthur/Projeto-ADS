const precoPorEmbalagem = {
  refrigerante: {
  "Lata": 1.35,
  "Garrafa PET": 1.90,
  "Garrafa De Vidro": 2.35
},

cerveja: {
  "Lata": 3.25,
  "Barril": 3.60,
  "Garrafa De Vidro": 5.50
},

};
const perdaPercentual = 2;

function redirecionar() {
  const produto = document.getElementById("produto").value;
  const tipoEmbalagem = document.getElementById("tipoEmbalagem").value;
  const preco = precoPorEmbalagem[produto][tipoEmbalagem];
 

  if (preco === undefined) {
    alert("Tipo de embalagem não encontrado.");
    return;
  }

  const quantidade = parseFloat(document.getElementById("quantidade").value) || 0;
  const velocidade = parseFloat(document.getElementById("velocidade").value) || 0;
  const totalComPerda = quantidade* (1 - perdaPercentual / 100); 

  document.getElementById("tipoEmbalagemResultado").textContent = tipoEmbalagem;
  document.getElementById("precoResultado").textContent = "R$ " + (preco * quantidade).toFixed(2);
  document.getElementById("velocidadeResultado").textContent = velocidade;
  document.getElementById("quantidadeResultado").textContent = quantidade;
  document.getElementById("perdaResultado").textContent = perdaPercentual + "%";
  document.getElementById("totalComPerdaResultado").textContent = totalComPerda.toFixed(0) + " unidades";
}


function atualizarEmbalagens() {
  const produto = document.getElementById("produto").value;
  const embalagens = Object.keys(precoPorEmbalagem[produto]);
  const datalist = document.getElementById("embalagem");

  datalist.innerHTML = "";
  embalagens.forEach(embalagem => {
    const option = document.createElement("option");
    option.value = embalagem;
    datalist.appendChild(option);
  });
}
atualizarEmbalagens();