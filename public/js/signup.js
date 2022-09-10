const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmpassword');
const logo = document.getElementById('logo');
const signup = document.getElementById('signup');
const url = '/user/auth/register';
signup.addEventListener('click', (event) => {
  event.preventDefault();
  const dataObj = {
    name: username.value,
    email: email.value,
    password: password.value,
    confirmpassword: confirmPassword.value,
    logo: logo.value,
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
