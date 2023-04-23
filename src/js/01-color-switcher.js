const docBody = document.body;
let timer = null;
let active = false;

docBody.addEventListener('click', clickCheck);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function clickCheck(ev) {
  if (ev.target.hasAttribute('data-start') && !active) startBtn(ev);
  if (ev.target.hasAttribute('data-stop') && active) stopBtn(ev);
}

function startBtn(ev) {
  active = true;
  ev.target.setAttribute('disabled', 'true');
  ev.target.nextElementSibling.removeAttribute('disabled');
  timer = setInterval(() => {
    docBody.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopBtn(e) {
  active = false;
  e.target.setAttribute('disabled', 'true');
  e.target.previousElementSibling.removeAttribute('disabled');
  clearInterval(timer);
}
