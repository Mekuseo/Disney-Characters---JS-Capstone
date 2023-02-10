import { getData } from './api.js';

const itemTotal = async () => {
  const total = await getData();
  const items = document.querySelector('.items');
  items.textContent = total.length;
};

// eslint-disable-next-line import/prefer-default-export
export { itemTotal };