const textField = document.createElement('textarea');
textField.id = 'text-field';
textField.setAttribute('rows', '10');
textField.setAttribute('disabled', 'disabled');
document.body.append(textField);

const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'keyboard';
document.body.append(keyboardContainer);

function getButton(value, className) {
  return `<button class="button ${className}">${value}</button>`;
}

let buttons = '';
const buttonsData = [
  {value: 'ё'},
  {value: 1},
  {value: 2},
  {value: 3},
  {value: 4},
  {value: 5},
  {value: 6},
  {value: 7},
  {value: 8},
  {value: 9},
  {value: 0},
  {value: '-'},
  {value: '='},
  {value: 'Backspace', className: 'big-button'},
  {value: 'Tab', className: 'middle-button'},
  {value: 'й'},
  {value: 'ц'},
  {value: 'у'},
  {value: 'к'},
  {value: 'е'},
  {value: 'н'},
  {value: 'г'},
  {value: 'ш'},
  {value: 'щ'},
  {value: 'з'},
  {value: 'х'},
  {value: 'ъ'},
  {value: '\\'},
  {value: 'DEL', className: 'middle-button'},
  {value: 'Caps Lock', className: 'big-button'},
  {value: 'ф'},
  {value: 'ы'},
  {value: 'в'},
  {value: 'а'},
  {value: 'п'},
  {value: 'р'},
  {value: 'о'},
  {value: 'л'},
  {value: 'д'},
  {value: 'ж'},
  {value: 'э'},
  {value: 'ENTER', className: 'big-button'},
  {value: 'Shift', className: 'big-button'},
  {value: '\\'},
  {value: 'я'},
  {value: 'ч'},
  {value: 'с'},
  {value: 'м'},
  {value: 'и'},
  {value: 'т'},
  {value: 'ь'},
  {value: 'б'},
  {value: 'ю'},
  {value: '/'},
  {value: '↑'},
  {value: 'Shift', className: 'middle-button'},
  {value: 'Ctrl', className: 'middle-button'},
  {value: 'Win', className: 'middle-button'},
  {value: 'Alt', className: 'middle-button'},
  {value: '', className: 'space-button'},
  {value: 'Alt', className: 'middle-button'},
  {value: 'Ctrl', className: 'middle-button'},
  {value: '←'},
  {value: '↓'},
  {value: '→'},
];

buttonsData.forEach(buttonData => {
  buttons += getButton(buttonData.value, buttonData.className);
});

keyboardContainer.insertAdjacentHTML('beforeend', buttons);
