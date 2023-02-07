import { getData } from './api.js';

const startPosition = document.querySelector('#body');
const popup = async () => {
  const apiData = await getData();
  let display = '';
  apiData.forEach((e) => {
    display += `<section class="container">
        <div class="box1">
        <img class="char__img" src="https://tinypng.com/images/social/website.jpg" alt="character-image"/>
        <h3 class="char__name">${e.name}</h3>
        <ul class="facts">
        <li class="fact">Films: ${e.films.length}</li>
        <li class="fact">Short Films: ${e.shortFilms.length}</li>
        </ul>
        <ul class="facts">
        <li class="fact">Tv Shows: ${e.tvShows.length}</li>
        <li class="fact">Allies: ${e.allies.length}</li>
        </ul>
        </div>
        <div class="box2">
        <div>
          <h3 class="comment__title">Comments</h3>
          <ul class="comments__box">
            <li>comment</li>
            <li>comment</li>
            <li>comment</li>
            <li>comment</li>
            <li>comment</li>
          </ul>
        </div>
        <div>
          <h3 class="comment__title">Add a comment</h3>
          <form class="form">
          <input class="username" type="text" required name="username" placeholder="Enter your Name" maxlength="20">
          <textarea cols="30" rows="5" class="comment" type="text" required name="comment" placeholder="Your Comments" ></textarea>
          <button type="submit" class="submit-comment">Comment</button>
          </form>
        </div>
        </div>
        </section>`;
  });
  startPosition.insertAdjacentHTML('afterbegin', display);
};

// eslint-disable-next-line import/prefer-default-export
export { popup };