class Personagem extends Animacao {
  constructor(matriz, imagem, x, y, variacaoY, largura, altura, larguraSprite,                         alturaSprite) {
    super(matriz, imagem, x, y, variacaoY, largura, altura, larguraSprite,                       alturaSprite);
    
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - variacaoY;
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 4;
    this.alturaDoPulo = -40;
    this.pulos = 0;
    
    this.invencivel = false;
  }
  
  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }
  
  tornarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }
  
  estaColidindo(inimigo) {
    if (this.invencivel) {return false}
    
    const p = 0.7; //Precisao, diminuir o ritbox
    const colisao = collideRectRect(this.x, this.y, this.largura * p, this.altura * p,
                   inimigo.x, inimigo.y, inimigo.largura * p, inimigo.altura * p);
    
    return colisao;
  }
  
}