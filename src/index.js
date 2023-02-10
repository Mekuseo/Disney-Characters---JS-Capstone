import './style.css';
// eslint-disable-next-line import/no-cycle, import/named
import { popup } from './popup.js';
import { getData, getClicks } from './api.js';
import { itemTotal } from './itemsTotal.js';

const apiDisplay = document.querySelector('.api-display');

const createCard = async () => {
  let clicks = await getClicks();
  const images = await getData();
  images.forEach((image, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${image.imageUrl}" alt="${image.name}" />
      <div class='image-name'>
        <h2>${image.name}</h2>
        <i class="fa-solid fa-heart heart" data-id="${index}"></i>
      </div>
      <p class='likes-count'>${clicks[index].likes} Likes</p>
      <button class='btn' data-id="${index}">Comments</button>
      <button>Reservations</button>
      `;
    apiDisplay.appendChild(card);
  });

  const likeButton = document.querySelectorAll('.heart');

  likeButton.forEach((e, index) => {
    e.addEventListener('click', async () => {
      e.classList.add('active');
      await fetch(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nkjqDKDvMMwAFsU6RQcX/likes', {
          method: 'POST',
          body: JSON.stringify({
            item_id: `item${index}`,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
      clicks = await getClicks();
      const updatedLikeCount = document.querySelectorAll('.likes-count');
      updatedLikeCount[index].innerHTML = `${clicks[index].likes} Likes`;
    });
  });
  return document.querySelectorAll('.btn');
};
createCard();
popup();
itemTotal();

// eslint-disable-next-line import/prefer-default-export
export { createCard };
