  const config = {
    baseUrl: 'https://nomoreparties.co/v1/pwff-cohort-1',
    headers: {
      authorization: '9774dcb0-c38f-40ae-87b7-691b274b96f1',
      'Content-Type': 'application/json'
    }
}

fetch('https://nomoreparties.co/v1/pwff-cohort-1/cards', {
headers: {
authorization: '9774dcb0-c38f-40ae-87b7-691b274b96f1'
}
})
.then(res => res.json())
.then((result) => {
console.log(result);
});