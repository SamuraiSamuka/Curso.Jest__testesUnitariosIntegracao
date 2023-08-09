class Carrinho {
  constructor() {
    this.itens = [];
    this.subtotal = null;
    this.frete = null;
    this.total = null;
  }

  adiciona(item) {
    // Deve adicionar corretamente itens ao carrinho;
    this.itens.push(item);
  }

  adicionaFrete(valor) {
    // Deve adicionar corretametne frete ao carrinho;
    this.frete = valor;
  }

  calculaTotal() {
    // Deve calcular corretamente e retornar o total;
    this.subtotal = this.itens.reduce((acum, item) => acum + item.pegaValorTotalItem(), 0);
    return this.subtotal + this.frete;
  }

  finalizaCompra() {
    // Deve calcular o subtotal;
    // Deve retornar um objeto com subtotal, frete e total;
    // ou lançar uma excessão em caso de carrinho de compras vazio;  V
    if (this.itens.length === 0) {
      throw new Error('Carrinho de compras vazio');
    }

    this.total = this.calculaTotal();

    return {
      subtotal: this.subtotal,
      frete: this.frete,
      total: this.total,
    };
  }
}

export default Carrinho;
