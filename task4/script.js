const href = document.querySelector('#href');

href.addEventListener('click',
  (event) => {
   event.preventDefault();
   let YourText = prompt('ваш текст ссылки');
   href.textContent = (YourText);        
 })