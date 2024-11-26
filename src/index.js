//import

import "./pages/index.css";
 
import { openModal, closeModal } from "./components/modal";
import { createCard, likeCard, deleteCard } from "./components/card";
import {
  enableValidation,
  validationConfig,
  clearValidation,
} from "./components/validation"; 
import { getUserData, getInitialCards, profileEditing, newCardForServer, editAvatar } from './components/api'; 
// import { initialCards } from "./cards";  

//DOM

const placesList = document.querySelector('.places__list')
const profileName = document.querySelector('.profile__title'); 
const profileDescription = document.querySelector('.profile__description'); 
const profileImage = document.querySelector('.profile__image');

//avatar


//Promise.all
let userId = "";

Promise.all([getUserData(), getInitialCards()])
  .then(([userData, cardsData]) => {
    profileName.textContent = userData.name
    profileDescription.textContent = userData.about
    profileImage.style.backgroundImage = `url(${userData.avatar})`;
    
    userId = userData._id
    cardsData.forEach((element) => {
      const newCard = createCard(element, deleteCard, openImage, userId)
      placesList.append(newCard)
    })
  })

// DOM

const cardList = document.querySelector(".places__list");
const newCardBtn = document.querySelector(".profile__add-button");

// open image by click

const image = document.querySelector(".popup_type_image");
const imagePopup = document.querySelector(".popup__image");
const captionPopup = document.querySelector(".popup__caption");

function openImage(cardData) {
  imagePopup.src = cardData.link;
  imagePopup.alt = cardData.name;
  captionPopup.textContent = cardData.name;

  openModal(image);
}

// card render

function cardRender(container, cardData) {
  container.append(cardData);
}

// edit profile

const popupProfileForm = document.querySelector(".popup_type_edit");
const editProfileBtn = document.querySelector(".profile__edit-button");
const closeButtons = document.querySelectorAll(".popup__close");

editProfileBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  clearValidation(popupProfileForm, validationConfig);

  nameInput.value = userName.textContent;
  jobInput.value = userDescription.textContent;

  openModal(popupProfileForm);
});

const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closeModal(popup);
    }
  });
});

closeButtons.forEach((item) => {
  const modal = item.closest(".popup");
  item.addEventListener("click", () => {
    closeModal(modal);
  });
});

//form fields

const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

const userName = document.querySelector(".profile__title");
const userDescription = document.querySelector(".profile__description");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  userName.textContent = nameInput.value;
  userDescription.textContent = jobInput.value;

  closeModal(popupProfileForm);
}

popupProfileForm.addEventListener("submit", handleProfileFormSubmit);

// add new card

const newCardForm = document.querySelector(".popup_type_new-card");
const newCardName = document.querySelector(".popup__input_type_card-name");
const newCardLink = document.querySelector(".popup__input_type_url");

// new card

newCardForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const newCardValues = {
    name: newCardName.value,
    link: newCardLink.value,
  };

  const newCardElement = createCard(
    newCardValues,
    deleteCard,
    likeCard,
    openImage
  );

  cardList.prepend(newCardElement);
  evt.target.reset();
  closeModal(newCardForm);
});

newCardBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  openModal(newCardForm);

  clearValidation(newCardForm, validationConfig);
}); 

enableValidation(validationConfig);

const showLoading = (button) => {
  button.textContent = 'Сохранение...';
 };