require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Verifica se fetchProducts é uma Função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it(`Verifica se a função fetchProducts chama fetch ao passar o argumento "computador"`, () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
});
