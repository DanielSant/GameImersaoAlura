function setup() {
  createCanvas(windowWidth, windowHeight);
  
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
  
  telaInicial = new TelaInicial();
  
  jogo = new Jogo();
  jogo.setup();
  
  frameRate(40);
  somDoJogo.loop();

  cenas = {
    telaInicial,
    jogo,
  };
}

function mouseClicked() {
  jogo.mouseClicked();
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}