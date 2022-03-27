require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Verifica se fetchProducts é uma Função', async () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it(`Verifica se a função fetchProducts chama fetch ao passar o argumento "computador"`, async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it(`Verifica se a função fetch utiliza o end-point "https://api.mercadolibre.com/sites/MLB/search?q=computador"`, async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Verifica se o retorno de fetchProducts é igual a computadorSearch', async () => {
    expect(await fetchProducts('computador')).toBe(computadorSearch);
  });

  it('Verifica se ao chamar fetchProducts sem argumento retorna uma mensagem de erro', async () => {
    await fetchProducts().catch(error => expect(error).toEqual(new Error('You must provide an url')));
  });
});
