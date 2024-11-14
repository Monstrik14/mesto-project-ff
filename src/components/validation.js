

clearValidation(profileForm, validationConfig)

// Вынесем все необходимые элементы формы в константы
const formElement = document.querySelector('.popup__input_type_name')
const formInput = formElement.querySelector('.popup__input_type_description')

// Функция, которая добавляет класс с ошибкой
const showInputError = (element) => {
  element.classList.add('popup__input_type_error')
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (element) => {
  element.classList.remove('popup__input_type_error')
}

// Функция, которая проверяет валидность поля
const isValid = () => {
  if (!formInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formInput)
  } else {
    // Если проходит, скроем
    hideInputError(formInput)
  }
}

// Вызовем функцию isValid на каждый ввод символа***
formInput.addEventListener('input', isValid) 