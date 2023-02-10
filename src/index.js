import './style.css';
// eslint-disable-next-line import/no-cycle, import/named
import { popup } from './popup.js';
import { getData, getClicks } from './api.js';
import { itemTotal } from './itemsTotal.js';

const apiDisplay = document.querySelector('.api-display');

const createCard = async () => {
  const images = await getData();
  const clicks = await getClicks();
  images.forEach((image, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${image.imageUrl}" alt="${image.name}" />
      <div class='image-name'>
        <h2>${image.name}</h2>
        <i class="fa-solid fa-heart heart" data-id="${index}"></i>
      </div>
      <p class='likes-count'>${clicks[index].likes} likes</p>
      <button class='btn' data-id="${index}">Comments</button>
      `;
    apiDisplay.appendChild(card);
  });

  const likeButton = document.querySelectorAll('.heart');

  likeButton.forEach((e) => {
    e.addEventListener('click', async () => {
      e.classList.add('active');
      await fetch(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UfLyVv1lq0qsaVGik4HQ/likes', {
          method: 'POST',
          body: JSON.stringify({
            item_id: `item${e.getAttribute('data-id')}`,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
      const updatedLikeCount = document.querySelectorAll('.likes-count');
      updatedLikeCount[e.getAttribute('data-id')].innerHTML = `${clicks[e.getAttribute('data-id')].likes} Likes`;
    });
  });
  return document.querySelectorAll('.btn');
};

createCard();
popup();
itemTotal();

// eslint-disable-next-line import/prefer-default-export
export { createCard };
