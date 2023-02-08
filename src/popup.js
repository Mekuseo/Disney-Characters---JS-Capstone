import { getData } from "./api";
import {createCard} from './index.js'
const startPosition =document.querySelector('#body');
const popup = async () =>{
    const apiData = await getData();
    const commentBtn = await createCard();
    let display ="";
    commentBtn.forEach((e) => {
        const dataID = e.getAttribute('data-id'); 
        e.addEventListener('click', async()=>{        
        display =`<section class="container">
        <div class="box1">
        <i class="fa-regular fa-circle-xmark cross"></i> 
        <img class="char__img" src="${apiData[dataID].imageUrl}"/>
        <ul class="facts">
        <li class="fact">Films: ${apiData[dataID].films.length}</li>
        <li class="fact">Short Films: ${apiData[dataID].shortFilms.length}</li>
        </ul>
        <ul class="facts">
        <li class="fact">Tv Shows: ${apiData[dataID].tvShows.length}</li>
        <li class="fact">Allies: ${apiData[dataID].allies.length}</li>
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
    
    startPosition.insertAdjacentHTML("afterbegin",display)
    const popupSection = document.querySelector('.container') ;
    const cross = document.querySelectorAll('.cross')
    cross.forEach((e) =>
    e.addEventListener('click', () =>{
        popupSection.classList.add('hide-container');
      })
    )
});
});
}

export {popup};