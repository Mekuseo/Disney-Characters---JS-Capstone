import './style.css';
// import { popup } from './popup.js';
import { getData } from './api.js';

const apiDisplay = document.querySelector('.api-display');

const createCard = async () => {
  const images = await getData();
  images.forEach((image, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${image.imageUrl}" alt="${image.name}" />
      <div class='image-name'>
        <h2>${image.name}</h2>
        <i class="fa-solid fa-heart"></i>
      </div>
      <p class='likes-count'>5 Likes</p>
      <button>Comments</button>
      <button id="${index}">Reservations</button>
      `;
    apiDisplay.appendChild(card);
  });
};

createCard();
// popup();