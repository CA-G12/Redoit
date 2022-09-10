const username = document.getElementById('user_name');

const password = document.getElementById('password');

const login = document.getElementById('login');
const url = '/user/auth/login';
login.addEventListener('click', (event) => {
  event.preventDefault();
  const dataObj = {
    name: username.value,
    password: password.value,
  };
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataObj),
  }).then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem('token', data.token);
      window.location.href = '/profile';
    }).catch(
      (err) => console.log(err),
    );
});
