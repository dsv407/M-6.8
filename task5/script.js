const butt = document.querySelector('#butt');
const input1 = document.querySelector('#input1');
const yourText = document.querySelector('#duplicateField');

function getInput() {
    yourText.textContent = (input1.value);
    input1.value = '';
}

butt.addEventListener('click', getInput)