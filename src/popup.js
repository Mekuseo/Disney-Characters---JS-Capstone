import { getData } from "./api";
import { createCard } from "./index.js";
const startPosition = document.querySelector("#body");
const popup = async () => {
  const apiData = await getData();
  const commentBtn = await createCard();
  let display = "";
  commentBtn.forEach((e) => {
    const dataId = e.getAttribute("data-id");
    e.addEventListener("click", async () => {
      let response = await fetch(
        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UfLyVv1lq0qsaVGik4HQ/comments?item_id=item${dataId}`
      );
      let commentData = await response.json();
      display = `<section class="container">
        <div class="box1">
        <i class="fa-regular fa-circle-xmark cross"></i> 
        <img class="char__img" src="${apiData[dataId].imageUrl}"/>
        <ul class="facts">
        <li class="fact">Films: ${apiData[dataId].films.length}</li>
        <li class="fact">Short Films: ${apiData[dataId].shortFilms.length}</li>
        </ul>
        <ul class="facts">
        <li class="fact">Tv Shows: ${apiData[dataId].tvShows.length}</li>
        <li class="fact">Allies: ${apiData[dataId].allies.length}</li>
        </ul>
        </div>
        <div class="box2">
        <div>
          <h3 class="comment__title ">Comments: <span class="counter"></span></h3>
          
          <ul id="box" class="comments__box">
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
      startPosition.insertAdjacentHTML("afterbegin", display);
      response = await fetch(
        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UfLyVv1lq0qsaVGik4HQ/comments?item_id=item${dataId}`
      );
      commentData = await response.json();
      const commentBox = document.querySelector("#box");
      const counter = document.querySelector(".counter");
      commentData.forEach((e) => {
        counter.innerHTML=`${commentData.length}`;
        commentBox.innerHTML += `<li class="comment__list"><span>${e.creation_date}</span><span>${e.username}</span> <span>${e.comment}</span></li>
        `;
      });
      const form = document.querySelector(".form");
      form.addEventListener("submit", async (e) => {
        const UserName = form.elements[0].value;
        const UserComment = form.elements[1].value;
        e.preventDefault();
        await fetch(
          "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UfLyVv1lq0qsaVGik4HQ/comments",{
            method: "POST",
            body: JSON.stringify({
                item_id: `item${dataId}`,
                username: UserName,
                comment: UserComment,
              }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
      commentBox.innerHTML="";
      commentData.forEach((e) => {
        counter.innerHTML=`${commentData.length}`;
        commentBox.innerHTML += `<li class="comment__list"><span>${e.creation_date}</span><span>${e.username}</span> <span>${e.comment}</span></li>
        `;
      });
      form.reset();
    });
      const popupSection = document.querySelector(".container");
      const cross = document.querySelectorAll(".cross");
      cross.forEach((e) =>
        e.addEventListener("click", () => {
            console.log('hi')
          popupSection.classList.add("hide-container");
        })
      );
    });
  });
};

export { popup };
