// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var topnav = document.getElementById("topnav");

// Get the offset position of the navbar
var sticky = topnav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    topnav.classList.add("sticky")
  } else {
    topnav.classList.remove("sticky");
  }
}


// Получаем ссылку на кнопку
const redirectButton = document.getElementById('redirectButton');

// Добавляем обработчик события "click"
redirectButton.addEventListener('click', () => {
    // Здесь можно выполнить действие перед перенаправлением, если необходимо
    console.log('Кнопка была нажата');

    // Выполняем перенаправление
    window.location.href = "section"; // Замените ссылку на нужную
});


// Получаем все кнопки с классом "scrollButton"
const scrollButtons = document.querySelectorAll('.scrollButton');

// Добавляем обработчик события "click" для каждой кнопки
scrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Получаем значение атрибута "data-target" для определения цели прокрутки
        const target = button.getAttribute('data-target');
        const targetElement = document.getElementById(target);

        // Прокручиваем к целевому элементу
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
