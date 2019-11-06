const textField = document.createElement('textarea');
textField.id = 'text-field';
textField.setAttribute('rows', '10');
textField.setAttribute('disabled', 'disabled');
document.body.append(textField);

const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'keyboard';
document.body.append(keyboardContainer);

let lang = 'en';

function getButton(value, className, keyCode) {
  if (className !== undefined) {
    return `<button class="button ${className}" data-key="${keyCode}">${value}</button>`;
  } else {
    return `<button class="button" data-key="${keyCode}">${value}</button>`;
  }
}

const buttonsData = [
  {
    keyCode: '192',
    en: {
      value: '`',
    },
    enShift: {
      value: '~',
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
    }
  },
  {
    keyCode: '87',
    en: {
      value: 'w',
    },
    enShift: {
      value: 'W',
    }
  },
  {
    keyCode: '69',
    en: {
      value: 'e',
    },
    enShift: {
      value: 'E',
    }
  },
  {
    keyCode: '82',
    en: {
      value: 'r',
    },
    enShift: {
      value: 'R',
    }
  },
  {
    keyCode: '84',
    en: {
      value: 't',
    },
    enShift: {
      value: 'T',
    }
  },
  {
    keyCode: '89',
    en: {
      value: 'y',
    },
    enShift: {
      value: 'Y',
    }
  },
  {
    keyCode: '85',
    en: {
      value: 'u',
    },
    enShift: {
      value: 'U',
    }
  },
  {
    keyCode: '73',
    en: {
      value: 'i',
    },
    enShift: {
      value: 'I',
    }
  },
  {
    keyCode: '79',
    en: {
      value: 'o',
    },
    enShift: {
      value: 'O',
    }
  },
  {
    keyCode: '80',
    en: {
      value: 'p',
    },
    enShift: {
      value: 'P',
    }
  },
  {
    keyCode: '219',
    en: {
      value: '[',
    },
    enShift: {
      value: '{',
    }
  },
  {
    keyCode: '221',
    en: {
      value: ']',
    },
    enShift: {
      value: '}',
    }
  },
  {
    keyCode: '220',
    en: {
      value: '\\',
    },
    enShift: {
      value: '/',
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
    }
  },
  {
    keyCode: '83',
    en: {
      value: 's',
    },
    enShift: {
      value: 'S',
    }
  },
  {
    keyCode: '68',
    en: {
      value: 'd',
    },
    enShift: {
      value: 'D',
    }
  },
  {
    keyCode: '70',
    en: {
      value: 'f',
    },
    enShift: {
      value: 'F',
    }
  },
  {
    keyCode: '71',
    en: {
      value: 'g',
    },
    enShift: {
      value: 'G',
    }
  },
  {
    keyCode: '72',
    en: {
      value: 'h',
    },
    enShift: {
      value: 'H',
    }
  },
  {
    keyCode: '74',
    en: {
      value: 'j',
    },
    enShift: {
      value: 'J',
    }
  },
  {
    keyCode: '75',
    en: {
      value: 'k',
    },
    enShift: {
      value: 'K',
    }
  },
  {
    keyCode: '76',
    en: {
      value: 'l',
    },
    enShift: {
      value: 'L',
    }
  },
  {
    keyCode: '186',
    en: {
      value: ';',
    },
    enShift: {
      value: ':',
    }
  },
  {
    keyCode: '222',
    en: {
      value: '&#8217;',
    },
    enShift: {
      value: '"',
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
    }
  },
  {
    keyCode: '88',
    en: {
      value: 'x',
    },
    enShift: {
      value: 'X',
    }
  },
  {
    keyCode: '67',
    en: {
      value: 'c',
    },
    enShift: {
      value: 'C',
    }
  },
  {
    keyCode: '86',
    en: {
      value: 'v',
    },
    enShift: {
      value: 'V',
    }
  },
  {
    keyCode: '66',
    en: {
      value: 'b',
    },
    enShift: {
      value: 'B',
    }
  },
  {
    keyCode: '78',
    en: {
      value: 'n',
    },
    enShift: {
      value: 'N',
    }
  },
  {
    keyCode: '77',
    en: {
      value: 'm',
    },
    enShift: {
      value: 'M',
    }
  },
  {
    keyCode: '188',
    en: {
      value: ',',
    },
    enShift: {
      value: '<',
    }
  },
  {
    keyCode: '190',
    en: {
      value: '.',
    },
    enShift: {
      value: '>',
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

function renderButtons(lang) {
  let buttons = '';
  buttonsData.forEach((buttonData) => {
    if (buttonData[lang] !== undefined) {
      buttons += getButton(buttonData[lang].value, buttonData.className, buttonData.keyCode);
    } else {
      buttons += getButton(buttonData.value, buttonData.className, buttonData.keyCode);
    }
  });

  keyboardContainer.insertAdjacentHTML('beforeend', buttons);
}

renderButtons(lang);

// function getActiveButton() {
// }

// function displayValues() {
// }

document.addEventListener('keydown', (e) => {
  const buttons = [...document.getElementsByClassName('button')];
  buttons.forEach((button) => {
    if (e.keyCode === button.dataset.key) {
      button.classList.add('active');
    }
  });
});

document.addEventListener('keyup', (e) => {
  const buttons = [...document.getElementsByClassName('button')];
  buttons.forEach((button) => {
    if (e.keyCode === button.dataset.key) {
      button.classList.remove('active');
    }
  });
});

keyboardContainer.addEventListener('mousedown', (e) => {
  const target = e.target;
  if (target.tagName === 'BUTTON') {
    target.classList.add('active');
  }
});

keyboardContainer.addEventListener('mouseup', (e) => {
  const target = e.target;
  if (target.tagName === 'BUTTON') {
    target.classList.remove('active');
  }
});
