/* Кнопку находим по классу (не по тегу) */
const button = document.querySelector('.button-link--secondary');

/* Проверяем, существует ли кнопка */
if (button) {
  /* Навешиваем обработчик события — ждём клика */
  button.addEventListener('click', function () {
    alert('Деньги — это не главное');
  });
}