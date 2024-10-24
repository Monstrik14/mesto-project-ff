import './pages/index.css'
import './components/card'
import './components/modal'

import {initialCards} from './cards'
import { openModal, closeModal } from '../components/modal';
import { createCard, likeCard, deleteCard } from '../components/card';

// @todo: Темплейт карточки

const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы

const cardList = document.querySelector('.places__list');
const newCardBtn = document.querySelector('.profile__add-button');



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

  image.addEventListener('click',function(evt){
    if (evt.currentTarget === evt.target){
      closeModal(image)
    }
  })





// @todo: Вывести карточки на страницу

function cardRender(container, cardData) {
  container.append(cardData);
}

initialCards.forEach(function(elem) {
  cardRender(cardList, createCard(elem, deleteCard, likeCard, openImage, openModal)); 
}); 


 
// edit profile

const popupForm = document.querySelector('.popup_type_edit')
const editProfileBtn = document.querySelector('.profile__edit-button')
const closeBtn = document.querySelectorAll('.popup__close')

editProfileBtn.addEventListener('click', function (){
  document.querySelector('.popup__input_type_name').value = 'Жак-Ив Кусто'
  document.querySelector('.popup__input_type_description').value = 'Исследователь океана'
  popupForm.classList.add('popup_is-opened')
})
//close function



//close by X

closeBtn.forEach(item => {
  const modal = item.closest('.popup')
  item.addEventListener('click', function (){
  closeModal(modal)
})
}) 

//close by overlay

popupForm.addEventListener('click',function(evt){
  if (evt.currentTarget === evt.target){
    closeModal(popupForm)
  }
})

//close by Esc

document.addEventListener('keydown', function(evt) {
  if (evt.key === "Escape") {
    popupForm.classList.remove('popup_is-opened')
    newCardForm.classList.remove('popup_is-opened')
    image.classList.remove('popup_is-opened')
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

newCardForm.addEventListener('click',function(evt){
  if (evt.currentTarget === evt.target){
    closeModal(newCardForm)
  }
})

