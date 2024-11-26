(()=>{"use strict";function e(e){document.addEventListener("keydown",r),e.classList.add("popup_is-opened")}function t(e){document.removeEventListener("keydown",r),e.classList.remove("popup_is-opened")}function r(e){"Escape"===e.key&&t(document.querySelector(".popup_is-opened"))}document.querySelector(".card__like-button"),document.querySelector("card__like-counter");var n=document.querySelector("#card-template").content;function o(e,t,r,o){var c=n.querySelector(".places__item").cloneNode(!0),u=c.querySelector(".card__image"),a=c.querySelector(".card__title"),i=c.querySelector(".card__like-button");return u.src=e.link,u.alt=e.name,a.textContent=e.name,i.addEventListener("click",r),u.addEventListener("click",(function(){return o(e)})),c.querySelector(".card__delete-button").addEventListener("click",(function(){t(c)})),c}function c(e){e.remove()}function u(e){e.target.classList.contains("card__like-button")&&e.target.classList.toggle("card__like-button_is-active")}var a={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},i=function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r.inputErrorClass),n.textContent="",n.classList.remove(r.errorClass)},l=function(e,t,r){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?i(e,t,r):function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),n.textContent=t.validationMessage,n.classList.add(r.errorClass)}(e,t,r)},s=function(e,t,r){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(r.inactiveButtonClass)):(t.disabled=!0,t.classList.add(r.inactiveButtonClass))},p=function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);r.forEach((function(r){i(e,r,t),n.classList.add(t.inactiveButtonClass),n.disabled=!0}))},d={baseUrl:"https://nomoreparties.co/v1/pwff-cohort-1",headers:{authorization:"9774dcb0-c38f-40ae-87b7-691b274b96f1","Content-Type":"application/json"}},f=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var m=document.querySelector(".places__list"),y=document.querySelector(".profile__title"),v=document.querySelector(".profile__description"),S=document.querySelector(".profile__image"),b="";Promise.all([(fetch("".concat(d.baseUrl,"/users/me")),{method:"GET",headers:d.headers}).then(f),fetch("".concat(d.baseUrl,"/cards"),{method:"GET",headers:d.headers}).then(f)]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c,u,a=[],i=!0,l=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=c.call(r)).done)&&(a.push(n.value),a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=n[0],a=n[1];y.textContent=u.name,v.textContent=u.about,S.style.backgroundImage="url(".concat(u.avatar,")"),b=u._id,a.forEach((function(e){var t=o(e,c,g,b);m.append(t)}))}));var q=document.querySelector(".places__list"),h=document.querySelector(".profile__add-button"),E=document.querySelector(".popup_type_image"),C=document.querySelector(".popup__image"),L=document.querySelector(".popup__caption");function g(t){C.src=t.link,C.alt=t.name,L.textContent=t.name,e(E)}initialCards.forEach((function(e){var t,r;t=q,r=o(e,c,u,g),t.append(r)}));var k=document.querySelector(".popup_type_edit"),A=document.querySelector(".profile__edit-button"),x=document.querySelectorAll(".popup__close");A.addEventListener("click",(function(t){t.preventDefault(),p(k,a),w.value=B.textContent,j.value=D.textContent,e(k)})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(r){r.target.classList.contains("popup")&&t(e)}))})),x.forEach((function(e){var r=e.closest(".popup");e.addEventListener("click",(function(){t(r)}))}));var w=document.querySelector(".popup__input_type_name"),j=document.querySelector(".popup__input_type_description"),B=document.querySelector(".profile__title"),D=document.querySelector(".profile__description");k.addEventListener("submit",(function(e){e.preventDefault(),B.textContent=w.value,D.textContent=j.value,t(k)}));var I=document.querySelector(".popup_type_new-card"),M=document.querySelector(".popup__input_type_card-name"),T=document.querySelector(".popup__input_type_url");I.addEventListener("submit",(function(e){e.preventDefault();var r=o({name:M.value,link:T.value},c,u,g);q.prepend(r),e.target.reset(),t(I)})),h.addEventListener("click",(function(t){t.preventDefault(),e(I),p(I,a)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);r.forEach((function(o){o.addEventListener("input",(function(){l(e,o,t),s(r,n,t)}))}))}(t,e)}))}(a)})();