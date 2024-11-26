
const config = {
  baseUrl: "https://nomoreparties.co/v1/pwff-cohort-1",
  headers: {
    authorization: "9774dcb0-c38f-40ae-87b7-691b274b96f1",
    'Content-Type': 'application/json'
  }
};

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "GET",
    headers: config.headers,
  }).then(getResponse);
};

export const getUserData = () => {
  return fetch(`${config.baseUrl}/users/me`,
    {
      method: "GET",
      headers: config.headers,
    })
  .then(getResponse);
};

export const profileEditing = (name, about) => { 
return fetch(`${config.baseUrl}/users/me`, {
  method: 'PATCH',
  headers: config.headers,
  body: JSON.stringify({
    name: name,
    about: about
  })
})
.then(getResponse)
}

export const newCardForServer = (newCard, newLink) => { 
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: newCard,
      link: newLink,
    })
    })
  .then(getResponse);
  }

  export const deleteCardFromServer = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`), {
      method: 'DELETE',
      headers: config.headers,
      }
      .then(getResponse);
    }

  export const putLike = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`), {
      method: 'PUT',
      headers: config.headers,
      }
      .then(getResponse);
    }

    export const deleteLike = (cardId) => {
      return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers,
        })
        .then(getResponse);
      }
      export const editAvatar = (avatar) => {
        return fetch(`${config.baseUrl}/users/me/avatar`, {
          method: 'PATCH',
          headers: config.headers,
          body: JSON.stringify({
            avatar: avatar
          })
          }) 
          .then(getResponse);
        }



