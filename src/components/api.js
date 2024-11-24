
const config = {
  baseUrl: "https://nomoreparties.co/v1/pwff-cohort-1",
  headers: {
    authorization: "9774dcb0-c38f-40ae-87b7-691b274b96f1",
    "Content-Type": "application/json",
  },
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

export const getUsersData = () => {
  return (
    fetch(`${config.baseUrl}/users/me`),
    {
      method: "GET",
      headers: config.headers,
    })
  .then(getResponse);
};

export const profileEditing = (name, about) =>{ 
return (
  fetch(`${config.baseUrl}/users/me`), {
  method: 'PATCH',
  headers: config.headers,
  body: JSON.stringify({
    name: name,
    about: about,
  })
})
}

export const newCardForServer = (serverCard, serverLink) =>{ 
  return (
    fetch(`${config.baseUrl}/cards`), {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: serverCard,
      link: serverLink,
    })
  })
  }


