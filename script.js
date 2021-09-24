document.getElementById("btnSortear").disabled = true;
var carta1 = {
  nome: "Dragão Mestre",
  imagem:
    "http://lol-stats.net/uploads/MpmCcb5KKmgS290yKLqmVTPZv1hJouMVC2GxSzl1.jpeg",
  atributos: {
    Magia: 22,
    Força: 26,
    Fogo: 29
  }
};
var carta2 = {
  nome: "Dragão Dourado",
  imagem:
    "https://seresmitologicos.com.br/wp-content/uploads/dragao-dourado.jpg",
  atributos: {
    Magia: 16,
    Força: 24,
    Fogo: 28
  }
};
var carta3 = {
  nome: "Dragão Prateado",
  imagem:
    "http://2.bp.blogspot.com/-3jWe7dAW8n4/UBW2We8aCXI/AAAAAAAABNQ/BA9_Y31hoa8/s1600/2s.jpg",
  atributos: {
    Magia: 15,
    Força: 21,
    Fogo: 27
  }
};
var carta4 = {
  nome: "Dragão Bronze",
  imagem:
    "https://static.wikia.nocookie.net/forgottenrealms/images/b/b7/Monster_Manual_5e_-_Dragon%2C_Bronze_-_p107.jpg",
  atributos: {
    Magia: 14,
    Força: 20,
    Fogo: 26
  }
};

var carta5 = {
  nome: "Dragão Cobre",
  imagem:
    "https://i.pinimg.com/originals/a9/2d/05/a92d053bbbc3181f3d3996807a290393.png",
  atributos: {
    Magia: 13,
    Força: 19,
    Fogo: 25
  }
};

var carta6 = {
  nome: "Dragão Branco",
  imagem:
    "http://pm1.narvii.com/7655/ee8320c041d3cc03da66f50bdf1fd35ec86f07b6r1-736-952v2_uhq.jpg",
  atributos: {
    Magia: 21,
    Força: 15,
    Fogo: 22
  }
};

var carta7 = {
  nome: "Dragão Negro",
  imagem:
    "http://pm1.narvii.com/6406/77a80b182308c2c862e81632d40225ab9ed1cbec_00.jpg",
  atributos: {
    Magia: 19,
    Força: 17,
    Fogo: 24
  }
};
var carta8 = {
  nome: "Dragão Vermelho",
  imagem:
    "http://secondarton.weebly.com/uploads/1/3/7/1/13716281/6940887_orig.jpg",
  atributos: {
    Magia: 20,
    Força: 16,
    Fogo: 23
  }
};
var carta9 = {
  nome: "Dragão Azul",
  imagem:
    "https://pt.erch2014.com/images/iskusstvo-i-razvlecheniya/goluboj-drakon-mif-ili-realnost.jpg",
  atributos: {
    Magia: 18,
    Força: 13,
    Fogo: 21
  }
};
var carta10 = {
  nome: "Dragão Verde",
  imagem:
    "http://pm1.narvii.com/7720/ceb95f96577fffb8d898336bfc607c5378cd9961r1-699-439v2_uhq.jpg",
  atributos: {
    Magia: 17,
    Força: 14,
    Fogo: 20
  }
};
var carta11 = {
  nome: "Cavaleiro",
  imagem:
    "https://4.bp.blogspot.com/-RNTWVYG0Qj8/VCCXam47aqI/AAAAAAAAMgk/dpD0Ja0_ShI/s1600/286412_Papel-de-Parede-Mount-Blade_1920x1080.jpg",
  atributos: {
    Magia: 6,
    Força: 23,
    Fogo: 11
  }
};
var carta12 = {
  nome: "Colosso",
  imagem:
    "https://www.sohistoria.com.br/curiosidades/seteantigo/index_clip_image018.jpg",
  atributos: {
    Magia: 0,
    Força: 30,
    Fogo: 0
  }
};
var carta13 = {
  nome: "Feiticeira",
  imagem:
    "https://i2.wp.com/orbedosdragoes.com/wp-content/uploads/2016/12/DD5_Feiticeira.jpg",
  atributos: {
    Magia: 28,
    Força: 2,
    Fogo: 19
  }
};
var carta14 = {
  nome: "Guerreira",
  imagem: "https://images3.alphacoders.com/268/thumb-1920-268229.jpg",
  atributos: {
    Magia: 5,
    Força: 22,
    Fogo: 9
  }
};
var carta15 = {
  nome: "Guerreiro",
  imagem:
    "http://1.bp.blogspot.com/-SSe7xE9uJXo/UkyK5oN6LpI/AAAAAAAADOw/4nQQg7LHklc/s1600/Crusader.png",
  atributos: {
    Magia: 4,
    Força: 25,
    Fogo: 8
  }
};
var carta16 = {
  nome: "Herói",
  imagem:
    "https://blizzardwatch.com/wp-content/uploads/2019/10/RolePlaying01.png",
  atributos: {
    Magia: 12,
    Força: 27,
    Fogo: 15
  }
};
var carta17 = {
  nome: "Merlin",
  imagem:
    "https://cdna.artstation.com/p/assets/images/images/002/230/754/large/grzegorz-rutkowski-wizard-overlord-final-4-1920.jpg?1459024894",
  atributos: {
    Magia: 30,
    Força: 0,
    Fogo: 0
  }
};
var carta18 = {
  nome: "Gigante de Lava",
  imagem:
    "https://pm1.narvii.com/6712/9be4ba8866ec722936e49cd8bb30f0d6b6299c0d_hq.jpg",
  atributos: {
    Magia: 0,
    Força: 0,
    Fogo: 30
  }
};

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10,
  carta11,
  carta12,
  carta13,
  carta14,
  carta15,
  carta16,
  carta17,
  carta18
];

function shuffleArray(cartas) {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
  return cartas;
}

var cartaMaquina = 0;
var cartaJogador = 0;
var cartasMaquina = [];
var cartasJogador = [];
var nM = 0;
var nJ = 0;

function sortearBaralho() {
  ocultarCartas();

  shuffleArray(cartas); //embaralhar
  var j = 0;

  for (var i = 0; i < cartas.length / 2; i++) {
    cartasMaquina.push(cartas[i]);
    j = i + 1;
  } //distribuir cartas
  for (var i = j; i < cartas.length; i++) {
    cartasJogador.push(cartas[i]);
  }

  document.getElementById("btnEmbaralhar").disabled = true;
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  contadorJogador();
  contadorMaquina();
}

function sortearCarta() {
  document.getElementById("resultado").innerHTML = "<p></p>";
  resetaCarta();

  var numeroCartaMaquina = parseInt(Math.random() * cartasMaquina.length);
  cartaMaquina = cartasMaquina[numeroCartaMaquina];
  nM = numeroCartaMaquina;

  var numeroCartaJogador = parseInt(Math.random() * cartasJogador.length);
  nJ = numeroCartaJogador;

  cartaJogador = cartasJogador[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  // var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  // var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado =
      "<p class='resultado-final'>Venceu a rodada - sorteie novamente</p>";
    cartasJogador.push(cartaMaquina);
    cartasMaquina.splice(nM, 1);
  } else if (
    cartaMaquina.atributos[atributoSelecionado] >
    cartaJogador.atributos[atributoSelecionado]
  ) {
    htmlResultado =
      "<p class='resultado-final'>Perdeu a rodada - sorteie novamente</p>";
    cartasMaquina.push(cartaJogador);
    cartasJogador.splice(nJ, 1);
  } else {
    htmlResultado =
      "<p class='resultado-final'>Empatou a rodada - sorteie novamente</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnSortear").disabled = false;
  exibirCartaMaquina();

  contadorJogador();
  contadorMaquina();
  testarVitoria();
}

function testarVitoria() {
  if (cartasJogador.length == 0) {
    document.getElementById("resultado").innerHTML =
      "<h2>VOCÊ PERDEU O JOGO!! Embaralhe para reiniciar</h2>";
    document.getElementById("btnEmbaralhar").disabled = false;
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = true;
    cartasJogador.splice(0, cartasJogador.length);
    cartasMaquina.splice(0, cartasMaquina.length);
  } else if (cartasMaquina.length == 0) {
    document.getElementById("resultado").innerHTML =
      "<h2>VOCÊ VENCEU O JOGO!! Embaralhe para reiniciar</h2>";
    document.getElementById("btnEmbaralhar").disabled = false;
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = true;
    cartasJogador.splice(0, cartasJogador.length);
    cartasMaquina.splice(0, cartasMaquina.length);
  }
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value= " +
      atributo +
      ">" +
      atributo +
      ": " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value=" +
      atributo +
      ">" +
      atributo +
      ": " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function ocultarCartas() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/750px-Black_flag.svg.png")`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

  divCartaJogador.innerHTML = moldura + "</div>";
  resetaCarta();
}

function resetaCarta() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/750px-Black_flag.svg.png")`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

  divCartaMaquina.innerHTML = moldura + "</div>";
}

function contadorMaquina() {
  document.getElementById("ContadorMaquina").innerHTML =
    "<p>Cartas do Computador: " + cartasMaquina.length + "</p>";
}
function contadorJogador() {
  document.getElementById("ContadorJogador").innerHTML =
    "<p>Cartas do Jogador: " + cartasJogador.length + "</p>";
}