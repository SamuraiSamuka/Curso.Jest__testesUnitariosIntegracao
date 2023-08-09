/* eslint-disable no-undef */
import Carrinho from '../carrinho';
import Item from '../item';

describe('Testes do carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();

    expect(carrinho.subtotal).toBeNull();
  });

  it('Deve ter itens', () => {
    const carrinho = new Carrinho();
    const item = new Item('Beterraba', 9.5, 5);
    const item2 = new Item('Cenoura', 0.5, 4);

    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens[0]).toBe(item);
    expect(carrinho.itens[1]).toBe(item2);

    expect(carrinho.itens).toContain(item);
    expect(carrinho.itens).toContain(item2);
  });

  it('Deve ter a propriedade "total" na inicialização', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total');
  });

  it('Deve lançar erro ao finalizar compra com carrinho vazio', () => {
    function englobaErroCarrinho() {
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    }

    expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio');
  });

  it('Deve adicionar o frete', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(10);

    expect(carrinho.frete).toBe(10);
  });

  it('Deve finalizar as compras', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Mel', 1, 4);

    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(10);

    const resultado = carrinho.finalizaCompra();
    expect(resultado).toBe({
      subtotal: 14,
      frete: 10,
      total: 24,
    });
  });
});
