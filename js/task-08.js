// Напиши скрипт управления формой логина.
// <form class="login-form">
// <label>
// Email
// <input type="email" name="email" />
// </label>
// <label>
// Password
// <input type="password" name="password" />
// </label>
// <button type="submit">Login</button>
// </form>
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  // const email = document.querySelectorAll('.login-form input')[0].value;
  // const password = document.querySelectorAll('.login-form input')[1].value;
  if (
    parseInt(formElements.email.value.length) === 0 ||
    parseInt(formElements.password.value.length) === 0
  ) {
    alert('fill all');
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
  }
}
