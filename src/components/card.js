export { createCard, likeCard };
import {deleteCardFromServer, putLike, deleteLike } from './api'

// card template

const cardTemplate = document.querySelector("#card-template").content;

// create card

function createCard(cardData, likeCard, openImage, userId) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardDeletBtn = cardElement.querySelector(".card__delete-button");
  const likeCounter = cardElement.querySelector(".card__like-counter");
  const cardId = cardData._id; 

  cardImage.src = cardData.link;
  cardImage.alt = `картинка ${cardData.name}`;
  cardTitle.textContent = cardData.name;
  likeCounter.textContent = cardData.likes.length;

  cardLikeBtn.addEventListener("click", (evt) => {
    likeCard(evt, likeCounter, cardId);
  });

  cardImage.addEventListener("click", () => openImage(cardData));

  cardDeletBtn.addEventListener("click", () => {
    deleteCardFromServer(cardId)
      .then(() => {
        cardElement.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  if (cardData.likes.length > 0) {
    likeCounter.textContent = el.likes.length;
  } else {
    likeCounter.textContent = "0";
  }

  if (cardData.likes.some((like) => like._id == userId)) {
    cardLikeBtn.classList.add("card__like-button_is-active");
  }

  if (userId != userId) {
    cardDeletBtn.remove();
  } else {
    deleteCardFromServer(cardTemplate, cardId);

    if (userId === cardData.owner._id) {
      cardDeletBtn.style.display = "block";
    } else {
      cardDeletBtn.style.display = "none";
    }

    return cardElement;
  }
}

// card like

function likeCard(evt, cardId, likeCounter) {
  const likePlaced = evt.target;
  if (!likePlaced.classList.contains("card__like-button_is-active")) {
    putLike(cardId)
      .then((res) => {
        likePlaced.classList.add("card__like-button_is-active");
        likeCounter.textContent = res.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    deleteLike(cardId)
      .then((res) => {
        likePlaced.classList.remove("card__like-button_is-active");
        likeCounter.textContent = res.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
