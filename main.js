(()=>{"use strict";function e(e){document.addEventListener("keydown",n),e.classList.add("popup_is-opened")}function t(e){document.removeEventListener("keydown",n),e.classList.remove("popup_is-opened")}function n(e){"Escape"===e.key&&t(document.querySelector(".popup_is-opened"))}var r={baseUrl:"https://nomoreparties.co/v1/pwff-cohort-1",headers:{authorization:"9774dcb0-c38f-40ae-87b7-691b274b96f1","Content-Type":"application/json"}},o=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},c=document.querySelector("#card-template").content;function a(e,t,n,r,o){var a=c.querySelector(".places__item").cloneNode(!0),u=a.querySelector(".card__image"),i=a.querySelector(".card__title"),l=a.querySelector(".card__like-button"),s=a.querySelector(".card__delete-button"),d=a.querySelector(".card__like-counter"),p=e._id;return u.src=e.link,u.alt="картинка ".concat(e.name),i.textContent=e.name,d.textContent=e.likes.length,l.addEventListener("click",(function(e){t(e,p,d)})),u.addEventListener("click",(function(){return r(e)})),e.likes.length>0?d.textContent=e.likes.length:d.textContent="0",e.likes.some((function(e){return e._id==o}))&&l.classList.add("card__like-button_is-active"),o===e.owner._id?s.addEventListener("click",(function(){n(e,a)})):s.remove(),a}function u(e,t,n){var c=e.target;c.classList.contains("card__like-button_is-active")?function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:r.headers}).then(o)}(t).then((function(e){c.classList.remove("card__like-button_is-active"),n.textContent=e.likes.length})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:r.headers}).then(o)}(t).then((function(e){c.classList.add("card__like-button_is-active"),n.textContent=e.likes.length})).catch((function(e){console.log(e)}))}var i={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},l=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent="",r.classList.remove(n.errorClass)},s=function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?l(e,t,n):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),r.textContent=t.validationMessage,r.classList.add(n.errorClass)}(e,t,n)},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},p=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){l(e,n,t),r.classList.add(t.inactiveButtonClass),r.disabled=!0}))};function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var _=document.querySelector(".popup_type_new-card"),m=_.querySelector(".popup__input_type_card-name"),y=_.querySelector(".popup__input_type_url"),v=document.forms["new-place"],h=document.forms["edit-profile"],S=document.querySelector(".profile__title"),b=document.querySelector(".profile__description"),q=document.querySelector(".places__list"),C=document.querySelector(".profile__add-button"),E=document.querySelector(".places__list"),g=document.querySelector(".profile__image"),L=document.querySelector(".popup__avatar-change"),k=document.querySelector(".profile__image"),x=document.forms["avatar-change"],A=document.querySelector(".popup__input_type_url-avatar");function w(e,t){var n;(n=e._id,fetch("".concat(r.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:r.headers}).then(o)).then((function(){t.remove()})).catch((function(e){console.log(e)}))}g.addEventListener("click",(function(){e(L),p(L,i)})),x.addEventListener("submit",(function(e){e.preventDefault();var n,c=L.querySelector(".popup__button");c.textContent="Сохранение...",(n=A.value,fetch("".concat(r.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:r.headers,body:JSON.stringify({avatar:n})}).then(o)).then((function(e){k.style.backgroundImage="url(".concat(e.avatar,")"),t(L)})).finally((function(){c.textContent="Сохранить"}))}));var U="";Promise.all([fetch("".concat(r.baseUrl,"/users/me"),{method:"GET",headers:r.headers}).then(o),fetch("".concat(r.baseUrl,"/cards"),{method:"GET",headers:r.headers}).then(o)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];S.textContent=o.name,b.textContent=o.about,g.style.backgroundImage="url(".concat(o.avatar,")"),U=o._id,c.forEach((function(e){var t=a(e,u,w,D,U);E.append(t)}))}));var T=document.querySelector(".popup_type_image"),j=document.querySelector(".popup__image"),B=document.querySelector(".popup__caption");function D(t){j.src=t.link,j.alt=t.name,B.textContent=t.name,e(T)}var O=document.querySelector(".popup__input_type_name"),P=document.querySelector(".popup__input_type_description"),I=document.querySelector(".profile__title"),M=document.querySelector(".profile__description"),N=document.querySelector(".popup_type_edit"),J=document.querySelector(".profile__edit-button"),G=document.querySelectorAll(".popup__close");J.addEventListener("click",(function(){O.value=I.textContent,P.value=M.textContent,p(h.validationConfig),e(N)})),h.addEventListener("submit",(function(e){e.preventDefault();var n,c,a=N.querySelector(".popup__button");a.textContent="Сохранение...",(n=O.value,c=P.value,fetch("".concat(r.baseUrl,"/users/me"),{method:"PATCH",headers:r.headers,body:JSON.stringify({name:n,about:c})}).then(o)).then((function(e){S.textContent=e.name,b.textContent=e.about,t(L),h.reset(),p(N,i)})).finally((function(){a.textContent="Сохранить"}))})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(n){n.target.classList.contains("popup")&&t(e)}))})),G.forEach((function(e){var n=e.closest(".popup");e.addEventListener("click",(function(){t(n)}))})),N.addEventListener("submit",(function(e){e.preventDefault(),I.textContent=O.value,M.textContent=P.value,t(N)}));var H=document.querySelector(".popup_type_new-card");H.addEventListener("submit",(function(e){e.preventDefault();var n,c,i=_.querySelector(".popup__button");i.textContent="Сохранение...",(n=m.value,c=y.value,fetch("".concat(r.baseUrl,"/cards"),{method:"POST",headers:r.headers,body:JSON.stringify({name:n,link:c})}).then(o)).then((function(e){var n=a(e,u,w,D,U);q.prepend(n),v.reset(),t(H)})).finally((function(){i.textContent="Сохранить"}))})),C.addEventListener("click",(function(t){t.preventDefault(),e(H),p(H,i)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){s(e,o,t),d(n,r,t)}))}))}(t,e)}))}(i)})();