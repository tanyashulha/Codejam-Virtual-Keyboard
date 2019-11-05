const textField = document.createElement('textarea');
textField.id = 'text-field';
textField.setAttribute('rows', '10');
textField.setAttribute('disabled', 'disabled');
document.body.append(textField);

const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'keyboard';
document.body.append(keyboardContainer);

keyboardContainer.insertAdjacentHTML('afterbegin', '<button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button big-button"></button><button class="button middle-button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button middle-button"></button><button class="button big-button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button big-button"></button><button class="button big-button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button"></button><button class="button middle-button"></button><button class="button"></button><button class="button"></button><button class="button space-button"></button><button class="button"></button><button class="button middle-button"></button><button class="button"></button><button class="button"></button><button class="button"></button>');

const toggleButtons = [...document.getElementsByClassName('button')];
toggleButtons.forEach((toggleButton) => {
    toggleButton.onclick = () => {
        toggleButton.classList.toggle('active');
    }
})
