import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {

  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function')
  });

  it('FetchProductsList com o argumento "computador" e teste se fetch foi chamada', 
    async () => { await fetchProductsList('computador');
    expect(fetch).toBeCalled()
  })

  it('FetchProductsList com o argumento "computador", a função fetch utiliza o endpoint "computador"', 
    async () => { await fetchProductsList('computador')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })

  it('FetchProductsList com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', 
  async () => { expect(await fetchProductsList('computador')).toEqual(computadorSearch);
  })
  
  it('Teste se, ao chamar a função fetchProductsList sem argumento, retorna um erro com a mensagem',
    () => { expect(fetchProductsList()).rejects.toThrow(new Error('Termo de busca não informado'));
  })
});
