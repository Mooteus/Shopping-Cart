const fetchProducts = async (querry) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${querry}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
