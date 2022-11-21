import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const sectionProducts = document.querySelector('.products');
const cartProducts = document.querySelector('.cart__products');

const loading = () => {
  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'loading';
  loadingDiv.innerHTML = 'carregando...';
  return loadingDiv;
};

const erroMessage = () => {
  const error = document.createElement('div');
  error.className = 'error';
  error.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  return error;
};

const searchProduct = async () => {
  const inicialLoading = loading();
  sectionProducts.appendChild(inicialLoading);
  try {
    const productsList = await fetchProductsList('computador');
    sectionProducts.removeChild(inicialLoading);
    productsList.forEach((product) => {
      const productElement = createProductElement(product);
      sectionProducts.appendChild(productElement);
      return productElement;
    });
  } catch (error) {
    sectionProducts.removeChild(inicialLoading);
    sectionProducts.appendChild(erroMessage());
  }
};

searchProduct();

const productOnCart = () => {
  const cartProductsId = getSavedCartIDs();

  cartProductsId.forEach(async (id) => {
    const data = await fetchProduct(id);
    const cartElement = createCartProductElement(data);
    cartProducts.appendChild(cartElement);
  });
};

window.onload = () => {
  productOnCart();
};
