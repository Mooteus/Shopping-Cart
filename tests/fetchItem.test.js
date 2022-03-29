require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Execute a função fetchItem e verifique se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
});
