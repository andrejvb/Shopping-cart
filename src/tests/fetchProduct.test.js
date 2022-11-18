import './mocks/fetchSimulator';
import { fetchProduct, fetchProductsList } from '../helpers/fetchFunctions';
import product from './mocks/product';
import computadorSearch from './mocks/search';

describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function')
  });
  it('FetchProduct com o argumento "MLB1405519561" e teste se fetch foi chamada', 
    async () => { await fetchProduct('MLB1405519561');
    expect(fetch).toBeCalled()
  })
  it('FetchProduct com o argumento "MLB1405519561", a função fetch utiliza o endpoint "MLB1405519561"', 
    async () => { await fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561')
  })
  it('fetchProduct com o argumento do produto "MLB1405519561" é uma estrutura de dados igual ao objeto produto', async () => {
    expect(await fetchProduct('MLB1405519561')).toEqual(product);
  })
  it('Teste se, ao chamar a função fetchProduct sem argumento, retorna um erro com a mensagem',
  () => { expect(fetchProduct()).rejects.toThrow(new Error('ID não informado'));
  })
})
