const textField = document.createElement('textarea');
textField.id = 'text-field';
textField.setAttribute('rows', '10');
textField.setAttribute('disabled', 'disabled');
document.body.append(textField);

const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'keyboard';
document.body.append(keyboardContainer);

let lang = 'en';

function getButton(valueEn, className, keyCode) {
  if (className !== undefined) {
    return `<button class="button ${className}" data-key="${keyCode}">${valueEn}</button>`;
  } else {
    return `<button class="button" data-key="${keyCode}">${valueEn}</button>`;
  }
}
  
let buttons = '';
const buttonsData = [
  {
    keyCode: '192',
    en: {
      valueEn: '`',
    },
    enShift: {
      valueEn: '~',
    }
  },
  {
    valueEn: 1,
    keyCode: '49',
    enShift: {
      valueEn: '!',
    }
  },
  {
    valueEn: 2,
    keyCode: '50',
    enShift: {
      valueEn: '@',
    }
  },
  {
    valueEn: 3,
    keyCode: '51',
    enShift: {
      valueEn: '#',
    }
  },
  {
    valueEn: 4,
    keyCode: '52',
    enShift: {
      valueEn: '$',
    }
  },
  {
    valueEn: 5,
    keyCode: '53',
    enShift: {
      valueEn: '%',
    }
  },
  {
    valueEn: 6,
    keyCode: '54',
    enShift: {
      valueEn: '^',
    }
  },
  {
    valueEn: 7,
    keyCode: '55',
    enShift: {
      valueEn: '&',
    }
  },
  {
    valueEn: 8,
    keyCode: '56',
    enShift: {
      valueEn: '*',
    }
  },
  {
    valueEn: 9,
    keyCode: '57',
    enShift: {
      valueEn: '(',
    }
  },
  {
    valueEn: 0,
    keyCode: '48',
    enShift: {
      valueEn: ')',
    }
  },
  {
    valueEn: '-',
    keyCode: '189',
    enShift: {
      valueEn: '_',
    }
  },
  {
    valueEn: '=',
    keyCode: '187',
    enShift: {
      valueEn: '+',
    }
  },
  {
    valueEn: 'Backspace',
    className: 'big-button',
    keyCode: '8'
  },
  {
    valueEn: 'Tab',
    className: 'middle-button',
    keyCode: '9'
  },
  {
    keyCode: '81',
    en: {
      valueEn: 'q',
    },
    enShift: {
      valueEn: 'Q',
    }
  },
  {
    keyCode: '87',
    en: {
      valueEn: 'w',
    },
    enShift: {
      valueEn: 'W',
    }
  },
  {
    keyCode: '69',
    en: {
      valueEn: 'e',
    },
    enShift: {
      valueEn: 'E',
    }
  },
  {
    keyCode: '82',
    en: {
      valueEn: 'r',
    },
    enShift: {
      valueEn: 'R',
    }
  },
  {
    keyCode: '84',
    en: {
      valueEn: 't',
    },
    enShift: {
      valueEn: 'T',
    }
  },
  {
    keyCode: '89',
    en: {
      valueEn: 'y',
    },
    enShift: {
      valueEn: 'Y',
    }
  },
  {
    keyCode: '85',
    en: {
      valueEn: 'u',
    },
    enShift: {
      valueEn: 'U',
    }
  },
  {
    keyCode: '73',
    en: {
      valueEn: 'i',
    },
    enShift: {
      valueEn: 'I',
    }
  },
  {
    keyCode: '79',
    en: {
      valueEn: 'o',
    },
    enShift: {
      valueEn: 'O',
    }
  },
  {
    keyCode: '80',
    en: {
      valueEn: 'p',
    },
    enShift: {
      valueEn: 'P',
    }
  },
  {
    keyCode: '219',
    en: {
      valueEn: '[',
    },
    enShift: {
      valueEn: '{',
    }
  },
  {
    keyCode: '221',
    en: {
      valueEn: ']',
    },
    enShift: {
      valueEn: '}',
    }
  },
  {
    keyCode: '220',
    en: {
      valueEn: '\\',
    },
    enShift: {
      valueEn: '/',
    }
  },
  {
    valueEn: 'Del', 
    className: 'middle-button',
    keyCode: '46'
  },
  {
    valueEn: 'Caps Lock', 
    className: 'big-button',
    keyCode: '20'
  },
  {
    keyCode: '65',
    en: {
      valueEn: 'a',
    },
    enShift: {
      valueEn: 'A',
    }
  },
  {
    keyCode: '83',
    en: {
      valueEn: 's',
    },
    enShift: {
      valueEn: 'S',
    }
  },
  {
    keyCode: '68',
    en: {
      valueEn: 'd',
    },
    enShift: {
      valueEn: 'D',
    }
  },
  {
    keyCode: '70',
    en: {
      valueEn: 'f',
    },
    enShift: {
      valueEn: 'F',
    }
  },
  {
    keyCode: '71',
    en: {
      valueEn: 'g',
    },
    enShift: {
      valueEn: 'G',
    }
  },
  {
    keyCode: '72',
    en: {
      valueEn: 'h',
    },
    enShift: {
      valueEn: 'H',
    }
  },
  {
    keyCode: '74',
    en: {
      valueEn: 'j',
    },
    enShift: {
      valueEn: 'J',
    }
  },
  {
    keyCode: '75',
    en: {
      valueEn: 'k',
    },
    enShift: {
      valueEn: 'K',
    }
  },
  {
    keyCode: '76',
    en: {
      valueEn: 'l',
    },
    enShift: {
      valueEn: 'L',
    }
  },
  {
    keyCode: '186',
    en: {
      valueEn: ';',
    },
    enShift: {
      valueEn: ':',
    }
  },
  {
    keyCode: '222',
    en: {
      valueEn: '&#8217;',
    },
    enShift: {
      valueEn: '"',
    }
  },
  {
    valueEn: 'Enter', 
    className: 'big-button',
    keyCode: '13'
  },
  {
    valueEn: 'Shift', 
    className: 'big-button',
    keyCode: '16'
  },
  {
    en: {
      valueEn: '\\',
    }
  },
  {
    keyCode: '90',
    en: {
      valueEn: 'z',
    },
    enShift: {
      valueEn: 'Z',
    }
  },
  {
    keyCode: '88',
    en: {
      valueEn: 'x',
    },
    enShift: {
      valueEn: 'X',
    }
  },
  {
    keyCode: '67',
    en: {
      valueEn: 'c',
    },
    enShift: {
      valueEn: 'C',
    }
  },
  {
    keyCode: '86',
    en: {
      valueEn: 'v',
    },
    enShift: {
      valueEn: 'V',
    }
  },
  {
    keyCode: '66',
    en: {
      valueEn: 'b',
    },
    enShift: {
      valueEn: 'B',
    }
  },
  {
    keyCode: '78',
    en: {
      valueEn: 'n',
    },
    enShift: {
      valueEn: 'N',
    }
  },
  {
    keyCode: '77',
    en: {
      valueEn: 'm',
    },
    enShift: {
      valueEn: 'M',
    }
  },
  {
    keyCode: '188',
    en: {
      valueEn: ',',
    },
    enShift: {
      valueEn: '<',
    }
  },
  {
    keyCode: '190',
    en: {
      valueEn: '.',
    },
    enShift: {
      valueEn: '>',
    }
  },
  {
    keyCode: '191',
    en: {
      valueEn: '/',
    }
  },
  {  
    valueEn: '↑',
    keyCode: '38'
  },
  {
    valueEn: 'Shift', 
    className: 'middle-button',
    keyCode: '16'
  },
  {
    valueEn: 'Ctrl', 
    className: 'middle-button',
    keyCode: '17'
  },
  {
    valueEn: 'Win', 
    className: 'middle-button',
    keyCode: '91'
  },
  {
    valueEn: 'Alt',
    className: 'middle-button',
    keyCode: '18'
    },
  {
    valueEn: '', 
    className: 'space-button',
    keyCode: '32'
  },
  {
    valueEn: 'Alt', 
    className: 'middle-button',
    keyCode: '18'
  },
  {
    valueEn: 'Ctrl', 
    className: 'middle-button',
    keyCode: '17'
  },
  {
    valueEn: '←',
    keyCode: '37'
  },
  {
    valueEn: '↓',
    keyCode: '40'
  },
  {
    valueEn: '→',
    keyCode: '39'
  },
];

buttonsData.forEach((buttonData) => {
  if (buttonData.en !== undefined) {
    buttons += getButton(buttonData.en.valueEn, buttonData.className, buttonData.keyCode);
  } else {
    buttons += getButton(buttonData.valueEn, buttonData.className, buttonData.keyCode);
  }
});

keyboardContainer.insertAdjacentHTML('beforeend', buttons);

function getActiveButton() {
  
}

document.addEventListener('keydown', (e) => {
  let buttons = [...document.getElementsByClassName('button')];
  buttons.forEach((button) => {
    if (e.keyCode == button.dataset.key) {
      button.classList.add('active');
    }
  });
})

document.addEventListener('keyup', (e) => {
  let buttons = [...document.getElementsByClassName('button')];
  buttons.forEach((button) => {
    if (e.keyCode == button.dataset.key) {
      button.classList.remove('active');
    }  
  });
})

keyboardContainer.addEventListener('click', (e) => {
  let buttons = [...document.getElementsByClassName('button')];
  let target = e.target;
  if (target.tagName === 'BUTTON') {
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
    target.classList.add('active');
  }
})