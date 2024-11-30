export { createCard, likeCard };
import { deleteCardFromServer, putLike, deleteLike } from "./api";

// card template

const cardTemplate = document.querySelector("#card-template").content;

// create card

function createCard(element, likeCard, deleteCard, openImage, userId) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardDeletBtn = cardElement.querySelector(".card__delete-button");
  const likeCounter = cardElement.querySelector(".card__like-counter");
  const cardId = element._id;

  cardImage.src = element.link;
  cardImage.alt = `картинка ${element.name}`;
  cardTitle.textContent = element.name;
  likeCounter.textContent = element.likes.length;

  cardLikeBtn.addEventListener("click", (evt) => {
    likeCard(evt, likeCounter, cardId);
  });

  cardImage.addEventListener("click", () => openImage(element));

  if (element.likes.length > 0) {
    likeCounter.textContent = element.likes.length;
  } else {
    likeCounter.textContent = "0";
  }

  if (element.likes.some((like) => like._id == userId)) {
    cardLikeBtn.classList.add("card__like-button_is-active");
  }

  if (userId === element.owner._id) {
    cardDeletBtn.addEventListener("click", () => {
      deleteCard(element, cardElement);
    });
  } else {
    cardDeletBtn.remove();
  }

  return cardElement;
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
