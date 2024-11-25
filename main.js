(()=>{"use strict";function e(e){document.addEventListener("keydown",n),e.classList.add("popup_is-opened")}function t(e){document.removeEventListener("keydown",n),e.classList.remove("popup_is-opened")}function n(e){"Escape"===e.key&&t(document.querySelector(".popup_is-opened"))}var r=document.querySelector("#card-template").content;function o(e,t,n,o){var c=r.querySelector(".places__item").cloneNode(!0),a=c.querySelector(".card__image"),u=c.querySelector(".card__title"),s=c.querySelector(".card__like-button");return a.src=e.link,a.alt=e.name,u.textContent=e.name,s.addEventListener("click",n),a.addEventListener("click",(function(){return o(e)})),c.querySelector(".card__delete-button").addEventListener("click",(function(){t(c)})),c}function c(e){e.remove()}function a(e){e.target.classList.contains("card__like-button")&&e.target.classList.toggle("card__like-button_is-active")}var u={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},s=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent="",r.classList.remove(n.errorClass)},i=function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?s(e,t,n):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),r.textContent=t.validationMessage,r.classList.add(n.errorClass)}(e,t,n)},p=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},l=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){s(e,n,t),r.classList.add(t.inactiveButtonClass),r.disabled=!0}))},d={baseUrl:"https://nomoreparties.co/v1/pwff-cohort-1",headers:{authorization:"9774dcb0-c38f-40ae-87b7-691b274b96f1","Content-Type":"application/json"}},m=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};Promise.all([function(){return(fetch("".concat(d.baseUrl,"/users/me")),{method:"GET",headers:d.headers}).then(m)},function(){return fetch("".concat(d.baseUrl,"/cards"),{method:"GET",headers:d.headers}).then(m)}]);var _=document.querySelector(".places__list"),f=document.querySelector(".profile__add-button"),v=document.querySelector(".popup_type_image"),y=document.querySelector(".popup__image"),S=document.querySelector(".popup__caption");function h(t){y.src=t.link,y.alt=t.name,S.textContent=t.name,e(v)}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var t,n;t=_,n=o(e,c,a,h),t.append(n)}));var q=document.querySelector(".popup_type_edit"),k=document.querySelector(".profile__edit-button"),b=document.querySelectorAll(".popup__close");k.addEventListener("click",(function(t){t.preventDefault(),l(q,u),E.value=C.textContent,L.value=g.textContent,e(q)})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(n){n.target.classList.contains("popup")&&t(e)}))})),b.forEach((function(e){var n=e.closest(".popup");e.addEventListener("click",(function(){t(n)}))}));var E=document.querySelector(".popup__input_type_name"),L=document.querySelector(".popup__input_type_description"),C=document.querySelector(".profile__title"),g=document.querySelector(".profile__description");q.addEventListener("submit",(function(e){e.preventDefault(),C.textContent=E.value,g.textContent=L.value,t(q)}));var x=document.querySelector(".popup_type_new-card"),j=document.querySelector(".popup__input_type_card-name"),A=document.querySelector(".popup__input_type_url");x.addEventListener("submit",(function(e){e.preventDefault();var n=o({name:j.value,link:A.value},c,a,h);_.prepend(n),e.target.reset(),t(x)})),f.addEventListener("click",(function(t){t.preventDefault(),e(x),l(x,u)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){i(e,o,t),p(n,r,t)}))}))}(t,e)}))}(u)})();