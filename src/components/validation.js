
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector))
  formList.forEach((formElement) => {
    setEventListeners(formElement, validationConfig)
})
}

const setEventListeners = (formElement, validationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector))
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, validationConfig)
    })
  })
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(validationConfig.inputErrorClass)
    errorElement.textContent = errorMessage
    errorElement.classList.add(validationConfig.errorClass)
}

const hideInputError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove(validationConfig.inputErrorClass)
  errorElement.classList.remove(validationConfig.errorClass)
  errorElement.textContent = ''
}

const isValid = (formElement, inputElement, validationConfig) => {
  if (inputElement.validity.patternMismatch){
    inputElement.setCustomValidity(inputElement.dataset.errorMessage)
    } else {
      inputElement.setCustomValidity('')
    }
  }
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage)
  } else {
    hideInputError(formElement, inputElement, validationConfig)
  }

const toggleButtonState = (inputList, buttonElement, validationConfig) => {
  const hasInvalidInput = () => {
  inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
 if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(validation.inactiveButtonClass)
      buttonElement.disabled = true
  } else {
      buttonElement.classList.remove(validation.inactiveButtonClass)
      buttonElement.disabled = false
  } 
}
}

const clearValidation = () => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector))
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, validationConfig)
    buttonElement.classList.add(validation.inactiveButtonClass)
    buttonElement.disabled = true
})
}

// Вызовем функцию isValid на каждый ввод символа***
inputElement.addEventListener('input', isValid) 

clearValidation(profileForm, validationConfig)