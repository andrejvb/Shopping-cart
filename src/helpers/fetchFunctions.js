export const fetchProduct = async (id) => {
  if (id === undefined) { throw new Error('ID não informado'); }
  const product = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await product.json();
  return data;
};

export const fetchProductsList = async (endpoint) => {
  if (endpoint === undefined) { throw new Error('Termo de busca não informado'); }
  const product = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${endpoint}`);
  const data = await product.json();
  return data.results;
};
