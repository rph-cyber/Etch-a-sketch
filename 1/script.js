const container = document.querySelector('#container');
const numBoxInput = document.querySelector('#numBoxInput');
const createBoxesBtn = document.querySelector('#createBoxesBtn');
const redButton = document.querySelector('#color-btn1');
const greenButton = document.querySelector('#color-btn3');
const blueButton = document.querySelector('#color-btn2');


container.innerHTML = '';

function createBoxes(numBox) {
  for (let i = 0; i < numBox; i++) {
    const row = container.appendChild(document.createElement('div'));
    for (let j = 0; j < numBox; j++) {
      const square = document.createElement('div');
      square.className = 'box';
      row.appendChild(square);
    }
  }
}




createBoxesBtn.addEventListener('click', function() {
  container.innerHTML = '';
  createBoxes(numBoxInput.value);
});



let currentMouseoverEvent = null;

redButton.addEventListener('click', function() {
  container.removeEventListener('mouseover', currentMouseoverEvent);
  currentMouseoverEvent = e => e.target.classList.add('red');
  container.addEventListener('mouseover', currentMouseoverEvent);
});

blueButton.addEventListener('click', function() {
  container.removeEventListener('mouseover', currentMouseoverEvent);
  currentMouseoverEvent = e => e.target.classList.add('blue');
  container.addEventListener('mouseover', currentMouseoverEvent);
});

greenButton.addEventListener('click', function() {
  container.removeEventListener('mouseover', currentMouseoverEvent);
  currentMouseoverEvent = e => e.target.classList.add('green');
  container.addEventListener('mouseover', currentMouseoverEvent);
});
