const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', 
  (event) => {
    // тело обработчика
    alert('Этот метод консоли используется для вывода сообщений в браузерную консоль.');
    // конец тела обработчика
})

const Alert = document.querySelector('#Alert');
Alert.addEventListener('click', 
  (event) => {
    // тело обработчика
    alert('Этот метод показывает диалоговое окно с сообщением и кнопкой OK.');
    // конец тела обработчика
})

const Prompt = document.querySelector('#Prompt');
Prompt.addEventListener('click', 
  (event) => {
    // тело обработчика
    alert('Этот метод отображает диалоговое окно с запросом на ввод текста.');
    // конец тела обработчика
})