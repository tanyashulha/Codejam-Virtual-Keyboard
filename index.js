const textField = document.createElement('textarea');
textField.id = 'text-field';
textField.setAttribute('rows', '10');
textField.setAttribute('disabled', 'disabled');
document.body.append(textField);

const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'keyboard';
document.body.append(keyboardContainer);

function getButton(valueEn, className) {
  return `<button class="button ${className}">${valueEn}</button>`;
}

let buttons = '';
const buttonsData = [
  {valueEn: '`'},
  {valueEn: 1},
  {valueEn: 2},
  {valueEn: 3},
  {valueEn: 4},
  {valueEn: 5},
  {valueEn: 6},
  {valueEn: 7},
  {valueEn: 8},
  {valueEn: 9},
  {valueEn: 0},
  {valueEn: '-'},
  {valueEn: '='},
  {valueEn: 'Backspace', className: 'big-button'},
  {valueEn: 'Tab', className: 'middle-button'},
  {valueEn: 'q'},
  {valueEn: 'w'},
  {valueEn: 'e'},
  {valueEn: 'r'},
  {valueEn: 't'},
  {valueEn: 'y'},
  {valueEn: 'u'},
  {valueEn: 'i'},
  {valueEn: 'o'},
  {valueEn: 'p'},
  {valueEn: '['},
  {valueEn: ']'},
  {valueEn: '\\'},
  {valueEn: 'Del', className: 'middle-button'},
  {valueEn: 'Caps Lock', className: 'big-button'},
  {valueEn: 'a'},
  {valueEn: 's'},
  {valueEn: 'd'},
  {valueEn: 'f'},
  {valueEn: 'g'},
  {valueEn: 'h'},
  {valueEn: 'j'},
  {valueEn: 'k'},
  {valueEn: 'l'},
  {valueEn: ';'},
  {valueEn: '&#8217;'},
  {valueEn: 'Enter', className: 'big-button'},
  {valueEn: 'Shift', className: 'big-button'},
  {valueEn: '\\'},
  {valueEn: 'z'},
  {valueEn: 'x'},
  {valueEn: 'c'},
  {valueEn: 'v'},
  {valueEn: 'b'},
  {valueEn: 'n'},
  {valueEn: 'm'},
  {valueEn: ','},
  {valueEn: '.'},
  {valueEn: '/'},
  {valueEn: '↑'},
  {valueEn: 'Shift', className: 'middle-button'},
  {valueEn: 'Ctrl', className: 'middle-button'},
  {valueEn: 'Win', className: 'middle-button'},
  {valueEn: 'Alt', className: 'middle-button'},
  {valueEn: '', className: 'space-button'},
  {valueEn: 'Alt', className: 'middle-button'},
  {valueEn: 'Ctrl', className: 'middle-button'},
  {valueEn: '←'},
  {valueEn: '↓'},
  {valueEn: '→'},
];

buttonsData.forEach(buttonData => {
  buttons += getButton(buttonData.valueEn, buttonData.className);
});

keyboardContainer.insertAdjacentHTML('beforeend', buttons);

function getActiveButton() {

}

document.addEventListener('keydown', (e) => {
  console.log('нажаф:' + e.key);
})
