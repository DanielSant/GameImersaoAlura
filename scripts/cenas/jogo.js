class Jogo {
  constructor() {
    this.indiceInimigoAtual = 0;
    
    this.mapa = fita.mapa;
  }
  
  setup() {
    cenario = new Cenario(imagemCenario, 2);
  
    pontuacao = new Pontuacao();
    
    vida = new Vida(fita.configs.vidaMaxima, fita.configs.vidaInicial);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, height - 135,                                   67, 110, 135, 220, 270);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 52, 67, 52,                                   52,104, 104, 10);

    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width -                                       52, 52, parseInt(random(130, 200)), 100, 75, 200, 150, 10);

    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width -                                       52, 200, 40, 200, 200, 400, 400, 10);

    inimigos.push(inimigo);
    inimigos.push(inimigoVoador);
    inimigos.push(inimigoGrande);
  }
  
  mouseClicked() {
    personagem.pula();
    somPulo.play();
  }
   
  keyPressed(key) {
    if (key === 'ArrowUp' || key == ' ') {
      personagem.pula();
      somPulo.play();
    }
  }
  
  draw() {
    cenario.exibe();
    cenario.move();

    personagem.exibe();
    personagem.aplicaGravidade();

    pontuacao.exibe();
    pontuacao.adicionarPonto();
    
    vida.draw();

    const linhaAtual = this.mapa[this.indiceInimigoAtual];
    const inimigoAtual = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigoAtual.x < -inimigoAtual.largura;

    inimigoAtual.exibe();
    inimigoAtual.move();
    
    inimigoAtual.velocidade = linhaAtual.velocidade;

    if (inimigoVisivel) {
      this.indiceInimigoAtual++;
      inimigoAtual.aparece();
      
      if (this.indiceInimigoAtual > this.mapa.length - 1) {
          this.indiceInimigoAtual = 0;
      }
    }

    if (personagem.estaColidindo(inimigoAtual)) {
      personagem.tornarInvencivel();
      vida.perdeVida();
      if (vida.vidas == 0) {
        image(imagemGameOver, width/2 - 200, height/3);
        noLoop();
      }
    }
  }
}