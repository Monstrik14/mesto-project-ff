// import

import "./pages/index.css";

import { openModal, closeModal } from "./components/modal";
import { createCard, likeCard } from "./components/card";
import {
  enableValidation,
  validationConfig,
  clearValidation,
} from "./components/validation";
import {
  getUserData,
  getInitialCards,
  profileEditing,
  newCardForServer,
  editAvatar,
  deleteCardFromServer,
} from "./components/api";

//DOM

const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const newCardNameInput = popupTypeNewCard.querySelector(
  ".popup__input_type_card-name"
);
const newCardLinkInput = popupTypeNewCard.querySelector(
  ".popup__input_type_url"
);
const formForNewPlace = document.forms["new-place"];
const formEditProfile = document.forms["edit-profile"];
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const cardList = document.querySelector(".places__list");
const newCardBtn = document.querySelector(".profile__add-button");
const placesList = document.querySelector(".places__list");
const profileImage = document.querySelector(".profile__image");
const popupAvatar = document.querySelector(".popup__avatar-change");
const avatarClick = document.querySelector(".profile__image");
const avatarForm = document.forms["avatar-change"];
const avatarUrl = document.querySelector(".popup__input_type_url-avatar");

// avatar

profileImage.addEventListener("click", () => {
  openModal(popupAvatar);
  clearValidation(popupAvatar, validationConfig);
});

avatarForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const avatarSaveBtn = popupAvatar.querySelector(".popup__button");
  avatarSaveBtn.textContent = "Сохранение...";
  editAvatar(avatarUrl.value)
    .then((res) => {
      avatarClick.style.backgroundImage = `url(${res.avatar})`;
      closeModal(popupAvatar);
      avatarForm.reset()
      clearValidation(avatarForm, validationConfig)
    })
    .finally(() => {
      avatarSaveBtn.textContent = "Сохранить";
    });
});

// delete card

function deleteCard(element, cardElement) {
  deleteCardFromServer(element._id)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

// Promise.all(card rendering)

let userId = "";

Promise.all([getUserData(), getInitialCards()]).then(
  ([userData, cardsData]) => {
    profileName.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileImage.style.backgroundImage = `url(${userData.avatar})`;

    userId = userData._id;
    cardsData.forEach((element) => {
      const newCard = createCard(
        element,
        likeCard,
        deleteCard,
        openImage,
        userId
      );
      placesList.append(newCard);
    });
  }
);

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

// edit profile

const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const popupProfileForm = document.querySelector(".popup_type_edit");
const editProfileBtn = document.querySelector(".profile__edit-button");
const closeButtons = document.querySelectorAll(".popup__close");

editProfileBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popupProfileForm);
});

function editAndSubmitProfile(evt) {
  evt.preventDefault();
  const profileSaveBtn = popupProfileForm.querySelector(".popup__button");
  profileSaveBtn.textContent = "Сохранение...";
  profileEditing(profileName.textContent, profileDescription.textContent)
    .then(() => {
      profileName.textContent = nameInput.value;
      profileDescription.textContent = jobInput.value;
      formEditProfile.reset();
      closeModal(popupAvatar);
      clearValidation(formEditProfile, validationConfig)
    })
    .finally(() => {
      profileSaveBtn.textContent = "Сохранить";
    });
}

formEditProfile.addEventListener("submit", editAndSubmitProfile);

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

// form fields

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closeModal(popupProfileForm);
}

popupProfileForm.addEventListener("submit", handleProfileFormSubmit);

// add new card

const newCardForm = document.querySelector(".popup_type_new-card");

// new card

newCardForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const newCardFormSaveBtn = popupTypeNewCard.querySelector(".popup__button");
  newCardFormSaveBtn.textContent = "Сохранение...";
  newCardForServer(newCardNameInput.value, newCardLinkInput.value)
    .then((res) => {
      const newCardOnPage = createCard(
        res,
        likeCard,
        deleteCard,
        openImage,
        userId
      );
      cardList.prepend(newCardOnPage);
      formForNewPlace.reset();
      clearValidation(formForNewPlace, validationConfig)
      closeModal(newCardForm);
    })
    .finally(() => {
      newCardFormSaveBtn.textContent = "Сохранить";
    });
});

newCardBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  openModal(newCardForm);

  clearValidation(newCardForm, validationConfig);
});

enableValidation(validationConfig);
