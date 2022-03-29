require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Verifica se fetchItem é uma função', async () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Execute a função fetchItem e verifique se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifique se a função fetchItem utiliza o endPoint correto', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('Verifica se o retorno de fetchItem é o esperado', async () => {
    expect(await fetchItem('MLB1615760527')).toBe(item);
  });

  it('Verifica se ao chamar fetchItem sem argumento é retornado um erro', async () => {
    await fetchItem().catch(error => expect(error).toEqual(new Error('You must provide an url')));
  });
});
