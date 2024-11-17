
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const enableValidation = (validationConfig) => {
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

const showInputError = (inputElement, errorMessage, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(validationConfig.inputErrorClass)
    errorElement.textContent = errorMessage
    errorElement.classList.add(validationConfig.errorClass)
}

const hideInputError = (inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove(validationConfig.inputErrorClass)
  errorElement.classList.remove(validationConfig.errorClass)
  errorElement.textContent = ''
}

const isValid = (inputElement, validationConfig) => {
  if (inputElement.validity.patternMismatch){
    inputElement.setCustomValidity(inputElement.dataset.errorMessage)
    } else {
      inputElement.setCustomValidity("")
    }
  }
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage, validationConfig)
  } else {
    hideInputError(inputElement, validationConfig)
  }

const toggleButtonState = (inputList, buttonElement, validationConfig) => {
  const hasInvalidInput = () => {
  inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
 if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(validationConfig.inactiveButtonClass)
      buttonElement.disabled = true
  } else {
      buttonElement.classList.remove(validationConfig.inactiveButtonClass)
      buttonElement.disabled = false
  } 
}
}

const clearValidation = (formElement, validationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector))
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector)
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, validationConfig)
    buttonElement.classList.add(validationConfig.inactiveButtonClass)
    buttonElement.disabled = true
})
} 