const textField = document.createElement('textarea');
textField.id = 'text-field';
textField.setAttribute('rows', '10');
textField.setAttribute('disabled', 'disabled');
document.body.append(textField);

const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'keyboard';
document.body.append(keyboardContainer);

function getButton(value, className, keyCode) {
  if (className !== undefined) {
    return `<button class="button ${className}" data-key="${keyCode}">${value}</button>`;
  }
  return `<button class="button" data-key="${keyCode}">${value}</button>`;
}

const buttonsData = [
  {
    keyCode: '192',
    en: {
      value: '`',
    },
    enShift: {
      value: '~',
    },
    ru: {
      value: 'ё'
    },
    ruShift: {
      value: 'Ё'
    }
  },
  {
    value: 1,
    keyCode: '49',
    enShift: {
      value: '!',
    }
  },
  {
    value: 2,
    keyCode: '50',
    enShift: {
      value: '@',
    }
  },
  {
    value: 3,
    keyCode: '51',
    enShift: {
      value: '#',
    }
  },
  {
    value: 4,
    keyCode: '52',
    enShift: {
      value: '$',
    }
  },
  {
    value: 5,
    keyCode: '53',
    enShift: {
      value: '%',
    }
  },
  {
    value: 6,
    keyCode: '54',
    enShift: {
      value: '^',
    }
  },
  {
    value: 7,
    keyCode: '55',
    enShift: {
      value: '&',
    }
  },
  {
    value: 8,
    keyCode: '56',
    enShift: {
      value: '*',
    }
  },
  {
    value: 9,
    keyCode: '57',
    enShift: {
      value: '(',
    }
  },
  {
    value: 0,
    keyCode: '48',
    enShift: {
      value: ')',
    }
  },
  {
    value: '-',
    keyCode: '189',
    enShift: {
      value: '_',
    }
  },
  {
    value: '=',
    keyCode: '187',
    enShift: {
      value: '+',
    }
  },
  {
    value: 'Backspace',
    className: 'big-button',
    keyCode: '8'
  },
  {
    value: 'Tab',
    className: 'middle-button',
    keyCode: '9'
  },
  {
    keyCode: '81',
    en: {
      value: 'q',
    },
    enShift: {
      value: 'Q',
    },
    ru: {
      value: 'й'
    },
    ruShift: {
      value: 'Й'
    }
  },
  {
    keyCode: '87',
    en: {
      value: 'w',
    },
    enShift: {
      value: 'W',
    },
    ru: {
      value: 'ц'
    },
    ruShift: {
      value: 'Ц'
    }
  },
  {
    keyCode: '69',
    en: {
      value: 'e',
    },
    enShift: {
      value: 'E',
    },
    ru: {
      value: 'у'
    },
    ruShift: {
      value: 'У'
    }
  },
  {
    keyCode: '82',
    en: {
      value: 'r',
    },
    enShift: {
      value: 'R',
    },
    ru: {
      value: 'к'
    },
    ruShift: {
      value: 'К'
    }
  },
  {
    keyCode: '84',
    en: {
      value: 't',
    },
    enShift: {
      value: 'T',
    },
    ru: {
      value: 'е'
    },
    ruShift: {
      value: 'Е'
    }
  },
  {
    keyCode: '89',
    en: {
      value: 'y',
    },
    enShift: {
      value: 'Y',
    },
    ru: {
      value: 'н'
    },
    ruShift: {
      value: 'Н'
    }
  },
  {
    keyCode: '85',
    en: {
      value: 'u',
    },
    enShift: {
      value: 'U',
    },
    ru: {
      value: 'г'
    },
    ruShift: {
      value: 'Г'
    }
  },
  {
    keyCode: '73',
    en: {
      value: 'i',
    },
    enShift: {
      value: 'I',
    },
    ru: {
      value: 'ш'
    },
    ruShift: {
      value: 'Ш'
    }
  },
  {
    keyCode: '79',
    en: {
      value: 'o',
    },
    enShift: {
      value: 'O',
    },
    ru: {
      value: 'щ'
    },
    ruShift: {
      value: 'Щ'
    }
  },
  {
    keyCode: '80',
    en: {
      value: 'p',
    },
    enShift: {
      value: 'P',
    },
    ru: {
      value: 'з'
    },
    ruShift: {
      value: 'З'
    }
  },
  {
    keyCode: '219',
    en: {
      value: '[',
    },
    enShift: {
      value: '{',
    },
    ru: {
      value: 'х'
    },
    ruShift: {
      value: 'Х'
    }
  },
  {
    keyCode: '221',
    en: {
      value: ']',
    },
    enShift: {
      value: '}',
    },
    ru: {
      value: 'ъ'
    },
    ruShift: {
      value: 'Ъ'
    }
  },
  {
    keyCode: '220',
    en: {
      value: '\\',
    },
    enShift: {
      value: '/',
    },
    ru: {
      value: '\\'
    },
    ruShift: {
      value: '/'
    }
  },
  {
    value: 'Del',
    className: 'middle-button',
    keyCode: '46'
  },
  {
    value: 'Caps Lock',
    className: 'big-button',
    keyCode: '20'
  },
  {
    keyCode: '65',
    en: {
      value: 'a',
    },
    enShift: {
      value: 'A',
    },
    ru: {
      value: 'ф'
    },
    ruShift: {
      value: 'Ф'
    }
  },
  {
    keyCode: '83',
    en: {
      value: 's',
    },
    enShift: {
      value: 'S',
    },
    ru: {
      value: 'ы'
    },
    ruShift: {
      value: 'Ы'
    }
  },
  {
    keyCode: '68',
    en: {
      value: 'd',
    },
    enShift: {
      value: 'D',
    },
    ru: {
      value: 'в'
    },
    ruShift: {
      value: 'В'
    }
  },
  {
    keyCode: '70',
    en: {
      value: 'f',
    },
    enShift: {
      value: 'F',
    },
    ru: {
      value: 'а'
    },
    ruShift: {
      value: 'А'
    }
  },
  {
    keyCode: '71',
    en: {
      value: 'g',
    },
    enShift: {
      value: 'G',
    },
    ru: {
      value: 'п'
    },
    ruShift: {
      value: 'П'
    }
  },
  {
    keyCode: '72',
    en: {
      value: 'h',
    },
    enShift: {
      value: 'H',
    },
    ru: {
      value: 'р'
    },
    ruShift: {
      value: 'Р'
    }
  },
  {
    keyCode: '74',
    en: {
      value: 'j',
    },
    enShift: {
      value: 'J',
    },
    ru: {
      value: 'о'
    },
    ruShift: {
      value: 'О'
    }
  },
  {
    keyCode: '75',
    en: {
      value: 'k',
    },
    enShift: {
      value: 'K',
    },
    ru: {
      value: 'л'
    },
    ruShift: {
      value: 'Л'
    }
  },
  {
    keyCode: '76',
    en: {
      value: 'l',
    },
    enShift: {
      value: 'L',
    },
    ru: {
      value: 'д'
    },
    ruShift: {
      value: 'Д'
    }
  },
  {
    keyCode: '186',
    en: {
      value: ';',
    },
    enShift: {
      value: ':',
    },
    ru: {
      value: 'ж'
    },
    ruShift: {
      value: 'Ж'
    }
  },
  {
    keyCode: '222',
    en: {
      value: '&#8217;',
    },
    enShift: {
      value: '"',
    },
    ru: {
      value: 'э'
    },
    ruShift: {
      value: 'Э'
    }
  },
  {
    value: 'Enter',
    className: 'big-button',
    keyCode: '13'
  },
  {
    value: 'Shift',
    className: 'big-button',
    keyCode: '16'
  },
  {
    value: '\\',
  },
  {
    keyCode: '90',
    en: {
      value: 'z',
    },
    enShift: {
      value: 'Z',
    },
    ru: {
      value: 'я'
    },
    ruShift: {
      value: 'Я'
    }
  },
  {
    keyCode: '88',
    en: {
      value: 'x',
    },
    enShift: {
      value: 'X',
    },
    ru: {
      value: 'ч'
    },
    ruShift: {
      value: 'Ч'
    }
  },
  {
    keyCode: '67',
    en: {
      value: 'c',
    },
    enShift: {
      value: 'C',
    },
    ru: {
      value: 'с'
    },
    ruShift: {
      value: 'С'
    }
  },
  {
    keyCode: '86',
    en: {
      value: 'v',
    },
    enShift: {
      value: 'V',
    },
    ru: {
      value: 'м'
    },
    ruShift: {
      value: 'М'
    }
  },
  {
    keyCode: '66',
    en: {
      value: 'b',
    },
    enShift: {
      value: 'B',
    },
    ru: {
      value: 'и'
    },
    ruShift: {
      value: 'И'
    }
  },
  {
    keyCode: '78',
    en: {
      value: 'n',
    },
    enShift: {
      value: 'N',
    },
    ru: {
      value: 'т'
    },
    ruShift: {
      value: 'Т'
    }
  },
  {
    keyCode: '77',
    en: {
      value: 'm',
    },
    enShift: {
      value: 'M',
    },
    ru: {
      value: 'ь'
    },
    ruShift: {
      value: 'Ь'
    }
  },
  {
    keyCode: '188',
    en: {
      value: ',',
    },
    enShift: {
      value: '<',
    },
    ru: {
      value: 'б'
    },
    ruShift: {
      value: 'Б'
    }
  },
  {
    keyCode: '190',
    en: {
      value: '.',
    },
    enShift: {
      value: '>',
    },
    ru: {
      value: 'ю'
    },
    ruShift: {
      value: 'Ю'
    }
  },
  {
    keyCode: '191',
    value: '/',
  },
  {
    value: '↑',
    keyCode: '38'
  },
  {
    value: 'Shift',
    className: 'middle-button',
    keyCode: '16'
  },
  {
    value: 'Ctrl',
    className: 'middle-button',
    keyCode: '17'
  },
  {
    value: 'Win',
    className: 'middle-button',
    keyCode: '91'
  },
  {
    value: 'Alt',
    className: 'middle-button',
    keyCode: '18'
  },
  {
    value: '',
    className: 'space-button',
    keyCode: '32'
  },
  {
    value: 'Alt',
    className: 'middle-button',
    keyCode: '18'
  },
  {
    value: 'Ctrl',
    className: 'middle-button',
    keyCode: '17'
  },
  {
    value: '←',
    keyCode: '37'
  },
  {
    value: '↓',
    keyCode: '40'
  },
  {
    value: '→',
    keyCode: '39'
  },
];

let currentLanguage = 'en';

function renderButtons(language) {
  let buttons = '';
  buttonsData.forEach((buttonData) => {
    if (buttonData[language] !== undefined) {
      buttons += getButton(buttonData[language].value, buttonData.className, buttonData.keyCode);
    } else {
      buttons += getButton(buttonData.value, buttonData.className, buttonData.keyCode);
    }
  });

  keyboardContainer.innerHTML = '';
  keyboardContainer.insertAdjacentHTML('beforeend', buttons);
}

renderButtons(currentLanguage);

function isShift(button) {
  if (button.dataset.key === '16') {
    return true;
  } return false;
}

function isCtrl(button) {
  if (button.dataset.key === '17') {
    return true;
  } return false;
}

function getButtonByCode(keyCode) {
  let buttons = [...document.getElementsByClassName('button')];
  buttons = buttons.filter((button) => keyCode === Number(button.dataset.key));

  return [buttons[0]];
}

function addValueToTextarea(keyCode) {
  const arrCodes = [9, 20, 8, 46, 13, 16, 17, 91, 18, 37, 38, 39, 40];
  let letter;
  if (!arrCodes.includes(keyCode)) {
    if (!currentLanguage.includes('Shift')) {
      letter = String.fromCharCode(keyCode).toLowerCase();
      textField.innerHTML += letter;
    } else if (currentLanguage.includes('Shift')) {
      letter = String.fromCharCode(keyCode);
      textField.innerHTML += letter;
    }
  }
}

document.addEventListener('keydown', (e) => {
  getButtonByCode(e.keyCode).forEach((button) => {
    if (isShift(button)) {
      currentLanguage = 'enShift';
      renderButtons(currentLanguage);
      getButtonByCode(e.keyCode).forEach((newButton) => {
        newButton.classList.add('active');
      });
    }
    if (isCtrl(button)) {
      if (currentLanguage === 'enShift') {
        currentLanguage = 'ruShift';
        renderButtons(currentLanguage);
      } else if (currentLanguage === 'ruShift') {
        currentLanguage = 'enShift';
        renderButtons(currentLanguage);
      }
    }
    if (button.dataset.key === '8') {
      textField.innerHTML = textField.innerHTML.slice(0, -1);
    }
    button.classList.add('active');
    addValueToTextarea(e.keyCode);
  });
});

document.addEventListener('keyup', (e) => {
  const buttons = [...document.getElementsByClassName('button')];
  buttons.forEach((button) => {
    if (e.keyCode === Number(button.dataset.key)) {
      if (isShift(button)) {
        if (currentLanguage === 'ruShift') {
          currentLanguage = 'ru';
        } else if (currentLanguage === 'enShift') {
          currentLanguage = 'en';
        }
        renderButtons(currentLanguage);
      }
      button.classList.remove('active');
    }
  });
});

keyboardContainer.addEventListener('mousedown', (e) => {
  const target = e.target;
  if (target.tagName === 'BUTTON') {
    if (isShift(target)) {
      currentLanguage = 'enShift';
      renderButtons(currentLanguage);
      getButtonByCode(Number(target.dataset.key)).forEach((newButton) => {
        newButton.classList.add('active');
      });
    }
    if (target.dataset.key === '8') {
      textField.innerHTML = textField.innerHTML.slice(0, -1);
    }
    target.classList.add('active');
    addValueToTextarea(Number(target.dataset.key));
  }
});

keyboardContainer.addEventListener('mouseup', (e) => {
  const target = e.target;
  if (target.tagName === 'BUTTON') {
    if (isShift(target)) {
      currentLanguage = 'en';
      renderButtons(currentLanguage);
    }
    target.classList.remove('active');
  }
});
