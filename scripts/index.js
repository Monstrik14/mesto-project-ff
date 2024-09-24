// @todo: Темплейт карточки

const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы

const cardList = document.querySelector(".places__list");
const buttonNewCard = document.querySelector(".profile__add-button");

// @todo: Функция создания карточки

function createCard(cardData, deleteCard) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", () => {
      deleteCard(cardElement)
    })
  return cardElement; 
};

// @todo: Функция удаления карточки

  function deleteCard(cardElement) {
    cardElement.remove();
  }

// @todo: Вывести карточки на страницу

function cardRender(container, cardData) {
  container.append(cardData);
}

initialCards.forEach(function(elem) {
  cardRender(cardList, createCard(elem, deleteCard)); 
});
