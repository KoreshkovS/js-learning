// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".
// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refs = {
  input: document.querySelector('#name-input'),
  nameInSpan: document.querySelector('#name-output'),
};

function change(event) {
  if (event.currentTarget.value === '') {
    refs.nameInSpan.textContent = 'Anonymous';
  } else {
    refs.nameInSpan.textContent = event.currentTarget.value;
  }
}

refs.input.addEventListener('input', change);
