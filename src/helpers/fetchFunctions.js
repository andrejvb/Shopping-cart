export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (endpoint) => {
  if (endpoint === undefined) { throw new Error('Termo de busca não informado'); }
  const product = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${endpoint}`);
  const data = await product.json();
  return data.results;
};
