export {createCard, likeCard, deleteCard}

// card template

const cardTemplate = document.querySelector("#card-template").content;

// create card

function createCard(cardData, deleteCard, likeCard, openImage) {
  const cardElement = cardTemplate
    .querySelector('.places__item')
    .cloneNode(true);
  

  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardLikeBtn = cardElement.querySelector('.card__like-button')

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardLikeBtn.addEventListener('click', likeCard)
  cardImage.addEventListener('click', () => openImage(cardData))

  cardElement
    .querySelector('.card__delete-button')
    .addEventListener('click', () => {
      deleteCard(cardElement)
    })
  return cardElement;
}

// delete card

function deleteCard(cardElement) {
  cardElement.remove();
}

// card like

function likeCard(evt) {
  if (evt.target.classList.contains('card__like-button')) 
  {evt.target.classList.toggle('card__like-button_is-active')}
} 
