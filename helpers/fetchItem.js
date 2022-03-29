const fetchItem = async (id) => {
   const url = `https://api.mercadolibre.com/items/${id}`;

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
    fetchItem,
  };
}
