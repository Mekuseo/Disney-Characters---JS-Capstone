import { getData } from './api.js';

const itemTotal = async () => {
  const total = await getData();
  const items = document.querySelector('.items');
  items.textContent = total.length;
};

export default itemTotal;