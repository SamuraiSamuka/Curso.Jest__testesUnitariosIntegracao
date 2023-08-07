/* eslint-disable no-undef */
import Carrinho from '../carrinho';
import Item from '../item';

describe('Testesdo carrinho', () => {
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
});
