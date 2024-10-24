//import 

import './pages/index.css'
import {initialCards} from './cards'
import { openModal, closeModal } from './components/modal';
import { createCard, likeCard, deleteCard } from './components/card';

// DOM

const cardList = document.querySelector('.places__list');
const newCardBtn = document.querySelector('.profile__add-button');

// open image by click

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

// card render

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

popupForm.addEventListener('click',function(evt){
  if (evt.currentTarget === evt.target){
    closeModal(popupForm)
  }
})

closeBtn.forEach(item=> {
  const modal = item.closest('.popup')
  item.addEventListener('click', () =>{
    closeModal(modal)
  })
})

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

// new card

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

