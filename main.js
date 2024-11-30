(()=>{"use strict";function e(e){document.addEventListener("keydown",n),e.classList.add("popup_is-opened")}function t(e){document.removeEventListener("keydown",n),e.classList.remove("popup_is-opened")}function n(e){"Escape"===e.key&&t(document.querySelector(".popup_is-opened"))}var r={baseUrl:"https://nomoreparties.co/v1/pwff-cohort-1",headers:{authorization:"9774dcb0-c38f-40ae-87b7-691b274b96f1","Content-Type":"application/json"}},o=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},c=function(e){return fetch("".concat(r.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:r.headers}).then(o)},a=document.querySelector("#card-template").content;function u(e,t,n,r){var o=a.querySelector(".places__item").cloneNode(!0),u=o.querySelector(".card__image"),i=o.querySelector(".card__title"),l=o.querySelector(".card__like-button"),s=o.querySelector(".card__delete-button"),d=o.querySelector(".card__like-counter"),p=e._id;if(u.src=e.link,u.alt="картинка ".concat(e.name),i.textContent=e.name,d.textContent=e.likes.length,l.addEventListener("click",(function(e){t(e,d,p)})),u.addEventListener("click",(function(){return n(e)})),s.addEventListener("click",(function(){c(p).then((function(){o.remove()})).catch((function(e){console.log(e)}))})),e.likes.length>0?d.textContent=e.likes.length:d.textContent="0",e.likes.some((function(e){return e._id==r}))&&l.classList.add("card__like-button_is-active"),r==r)return c(a),r===e.owner._id?s.style.display="block":s.style.display="none",o;s.remove()}function i(e,t,n){var c=e.target;c.classList.contains("card__like-button_is-active")?function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:r.headers}).then(o)}(t).then((function(e){c.classList.remove("card__like-button_is-active"),n.textContent=e.likes.length})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:r.headers}).then(o)}(t).then((function(e){c.classList.add("card__like-button_is-active"),n.textContent=e.likes.length})).catch((function(e){console.log(e)}))}var l={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},s=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent="",r.classList.remove(n.errorClass)},d=function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?s(e,t,n):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),r.textContent=t.validationMessage,r.classList.add(n.errorClass)}(e,t,n)},p=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},f=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){s(e,n,t),r.classList.add(t.inactiveButtonClass),r.disabled=!0}))};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var m=document.querySelector(".places__list"),y=document.querySelector(".profile__add-button"),v=document.querySelector(".places__list"),h=document.querySelector(".profile__title"),S=document.querySelector(".profile__description"),b=document.querySelector(".profile__image");function q(e,t){c(t).then((function(){e.remove()})).catch((function(e){console.log(e)}))}document.querySelector(".popup__avatar-change"),document.querySelector(".profile__image"),document.querySelector(".popup__form"),document.querySelector(".popup__input_type_url-avatar");var E="";Promise.all([fetch("".concat(r.baseUrl,"/users/me"),{method:"GET",headers:r.headers}).then(o),fetch("".concat(r.baseUrl,"/cards"),{method:"GET",headers:r.headers}).then(o)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];h.textContent=o.name,S.textContent=o.about,b.style.backgroundImage="url(".concat(o.avatar,")"),E=o._id,c.forEach((function(e){var t=u(e,q,L,E);v.append(t)}))}));var k=document.querySelector(".popup_type_image"),g=document.querySelector(".popup__image"),C=document.querySelector(".popup__caption");function L(t){g.src=t.link,g.alt=t.name,C.textContent=t.name,e(k)}var x=document.querySelector(".popup_type_edit"),A=document.querySelector(".profile__edit-button"),w=document.querySelectorAll(".popup__close");A.addEventListener("click",(function(t){t.preventDefault(),f(x,l),U.value=j.textContent,T.value=B.textContent,e(x)})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(n){n.target.classList.contains("popup")&&t(e)}))})),w.forEach((function(e){var n=e.closest(".popup");e.addEventListener("click",(function(){t(n)}))}));var U=document.querySelector(".popup__input_type_name"),T=document.querySelector(".popup__input_type_description"),j=document.querySelector(".profile__title"),B=document.querySelector(".profile__description");x.addEventListener("submit",(function(e){e.preventDefault(),j.textContent=U.value,B.textContent=T.value,t(x)}));var D=document.querySelector(".popup_type_new-card"),O=document.querySelector(".popup__input_type_card-name"),I=document.querySelector(".popup__input_type_url");D.addEventListener("submit",(function(e){var n;e.preventDefault(),(n={name:O.value,link:I.value},fetch("".concat(r.baseUrl,"/cards"),{method:"POST",headers:r.headers,body:JSON.stringify({name:n,link:undefined})}).then(o)).then((function(n){var r=u(n,q,i,L);m.prepend(r),e.target.reset(),t(D)}))})),y.addEventListener("click",(function(t){t.preventDefault(),e(D),f(D,l)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){d(e,o,t),p(n,r,t)}))}))}(t,e)}))}(l)})();