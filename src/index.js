import './pages/index.css'

import {initialCards} from './cards'

// @todo: Темплейт карточки

const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы

const cardList = document.querySelector('.places__list');
const newCardBtn = document.querySelector('.profile__add-button');

// @todo: Функция создания карточки

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

// открытие изображения по клику

  const image = document.querySelector('.popup_type_image')
  const imagePopup = document.querySelector('.popup__image')
  const captionPopup = document.querySelector('.popup__caption'); 

 function openImage(cardData){
  imagePopup.src = cardData.link
  imagePopup.alt = cardData.name
  captionPopup.textContent = cardData.name

  openModal(image)
  }

  document.addEventListener('click', openImage)

// @todo: Функция удаления карточки

  function deleteCard(cardElement) {
    cardElement.remove();
  }

// @todo: Вывести карточки на страницу

function cardRender(container, cardData) {
  container.append(cardData);
}

initialCards.forEach(function(elem) {
  cardRender(cardList, createCard(elem, deleteCard, likeCard, openModal, openImage)); 
}); 

function openModal(popup){
  popup.classList.add('popup_is-opened')
}
 
// edit profile

const popupForm = document.querySelector('.popup_type_edit')
const editProfileBtn = document.querySelector('.profile__edit-button')
const closeBtn = document.querySelector('.popup__close')

editProfileBtn.addEventListener('click', function (){
  document.querySelector('.popup__input_type_name').value = 'Жак-Ив Кусто'
  document.querySelector('.popup__input_type_description').value = 'Исследователь океана'
  popupForm.classList.add('popup_is-opened')
})

//close profile 

closeBtn.addEventListener('click', function (){
  popupForm.classList.remove('popup_is-opened');
})

//close by overlay

window.onclick = function(evt){
  if (evt.target === popupForm){
    popupForm.classList.remove('popup_is-opened') 
  }
}

//close by Esc

document.addEventListener('keydown', function(evt) {
  if (evt.key === "Escape") {
    popupForm.classList.remove('popup_is-opened')
  }
});

//form fields

const formElement = document.querySelector('.popup_type_edit')
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_description')

const userName = document.querySelector('.profile__title');
const userDescription = document.querySelector('.profile__description')

function handleFormSubmit(evt) {
    evt.preventDefault();
    
    userName.textContent = nameInput.value
    userDescription.textContent = jobInput.value
   
    formElement.classList.remove('popup_is-opened') 
  }

formElement.addEventListener('submit', handleFormSubmit)


// add new card  

const newCardForm = document.querySelector('.popup_type_new-card')
const newCardname = document.querySelector('.popup__input_type_card-name')
const newCardLink = document.querySelector('.popup__input_type_url')

  function closeModal(newCardForm){
      newCardForm.classList.remove('popup_is-opened')
    }

// new card function

newCardForm.addEventListener('submit', function (evt){
evt.preventDefault();

const newCardValues = {
  name: newCardname.value,
  link: newCardLink.value,
}

const newCardElement = createCard(newCardValues, deleteCard)

cardList.prepend(newCardElement)
evt.target.reset()
closeModal(newCardForm)
})

newCardBtn.addEventListener('click', function(){
openModal(newCardForm)
})

// card like

function likeCard(evt) {
  if (evt.target.classList.contains('card__like-button')) 
  {evt.target.classList.toggle('card__like-button_is-active')}
}

document.addEventListener('click', likeCard)