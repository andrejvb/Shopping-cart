import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const sectionProducts = document.querySelector('.products');

const productsList = await fetchProductsList('computador');

productsList.forEach((product) => {
  const productElement = createProductElement(product);
  sectionProducts.appendChild(productElement);
  return productElement;
});
