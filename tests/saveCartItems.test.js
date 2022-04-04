const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('Verifica se ao chamar saveCartItems ele chama o metodo localStorage.setItem', () => {
    const arg = '<ol><li>Item</li></ol>';
    saveCartItems(arg);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
