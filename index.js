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
    en: {
      valueEn: '`',
      keyCode: '192'
    }
  },
  {
    valueEn: 1,
    keyCode: '49'
  },
  {
    valueEn: 2,
    keyCode: '50'
  },
  {
    valueEn: 3,
    keyCode: '51'
  },
  {
    valueEn: 4,
    keyCode: '52'
  },
  {
    valueEn: 5,
    keyCode: '53'
  },
  {
    valueEn: 6,
    keyCode: '54'
  },
  {
    valueEn: 7,
    keyCode: '55'
  },
  {
    valueEn: 8,
    keyCode: '56'
  },
  {
    valueEn: 9,
    keyCode: '57'
  },
  {
    valueEn: 0,
    keyCode: '48'
  },
  {
    valueEn: '-',
    keyCode: '189'
  },
  {
    valueEn: '=',
    keyCode: '187'
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
    en: {
      valueEn: 'q',
      keyCode: '81'
    }
  },
  {
    en: {
      valueEn: 'w',
      keyCode: '87'
    }
  },
  {
    en: {
      valueEn: 'e',
      keyCode: '69'
    }
  },
  {
    en: {
      valueEn: 'r',
      keyCode: '82'
    }
  },
  {
    en: {
      valueEn: 't',
      keyCode: '84'
    }
  },
  {
    en: {
      valueEn: 'y',
      keyCode: '89'
    }
  },
  {
    en: {
      valueEn: 'u',
      keyCode: '85'
    }
  },
  {
    en: {
      valueEn: 'i',
      keyCode: '73'
    }
  },
  {
    en: {
      valueEn: 'o',
      keyCode: '79'
    }
  },
  {
    en: {
      valueEn: 'p',
      keyCode: '80'
    }
  },
  {
    en: {
      valueEn: '[',
      keyCode: '219'
    }
  },
  {
    en: {
      valueEn: ']',
      keyCode: '221'
    }
  },
  {
    en: {
      valueEn: '\\',
      keyCode: '220'
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
    en: {
      valueEn: 'a',
      keyCode: '65'
    }
  },
  {
    en: {
      valueEn: 's',
      keyCode: '83'
    }
  },
  {
    en: {
      valueEn: 'd',
      keyCode: '68'
    }
  },
  {
    en: {
      valueEn: 'f',
      keyCode: '70'
    }
  },
  {
    en: {
      valueEn: 'g',
      keyCode: '71'
    }
  },
  {
    en: {
      valueEn: 'h',
      keyCode: '72'
    }
  },
  {
    en: {
      valueEn: 'j',
      keyCode: '74'
    }
  },
  {
    en: {
      valueEn: 'k',
      keyCode: '75'
    }
  },
  {
    en: {
      valueEn: 'l',
      keyCode: '76'
    }
  },
  {
    en: {
      valueEn: ';',
      keyCode: '186'
    }
  },
  {
    en: {
      valueEn: '&#8217;',
      keyCode: '222'
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
      keyCode: '220'
    }
  },
  {
    en: {
      valueEn: 'z',
      keyCode: '90'
    }
  },
  {
    en: {
      valueEn: 'x',
      keyCode: '88'
    }
  },
  {
    en: {
      valueEn: 'c',
      keyCode: '67'
    }
  },
  {
    en: {
      valueEn: 'v',
      keyCode: '86'
    }
  },
  {
    en: {
      valueEn: 'b',
      keyCode: '66'
    }
  },
  {
    en: {
      valueEn: 'n',
      keyCode: '78'
    }
  },
  {
    en: {
      valueEn: 'm',
      keyCode: '77'
    }
  },
  {
    en: {
      valueEn: ',',
      keyCode: '188'
    }
  },
  {
    en: {
      valueEn: '.',
      keyCode: '190'
    }
  },
  {
    en: {
      valueEn: '/',
      keyCode: '191'
    }
  },
  {  
    valueEn: '↑',
    keyCde: '38'
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
    buttons += getButton(buttonData.en.valueEn, buttonData.className, buttonData.en.keyCode);
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
      button.classList.toggle('active');
    } else {
      button.classList.remove('active');
    }
  })

})