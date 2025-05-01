let display = document.getElementById('display');

function append(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  if (display.innerText.length === 1) {
    display.innerText = '0';
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = 'Error';
  }
}

function toggleMenu() {
  const tagline = document.getElementById('tagline');
  if (tagline.style.display === 'none' || tagline.style.display === '') {
    tagline.style.display = 'block';
  } else {
    tagline.style.display = 'none';
  }
}
