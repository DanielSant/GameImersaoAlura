class Vida {
  constructor(maximoVidas, vidasIniciais) {
    this.maximoVidas = maximoVidas;
    this.vidasIniciais = vidasIniciais;
    
    this.vidas = this.vidasIniciais;
    
    this.largura = 25;
    this.altura = 25;
    this.xInicial = 20;
    this.y = 20;
  }
  
  draw() {
    for(let i = 0; i < this.vidas; i++) {
      const margem = i * 10;
      const posicao = this.xInicial * (1 + i);
      image(imagemVida, posicao + margem, this.y, this.largura, this.altura);
    }
  }
  
  ganhaVida() {
    if (this.vidas < this.maximoVidas) {
      this.vidas++;
    }
  }
  
  perdeVida() {
    this.vidas--;
  }
}