document.addEventListener('DOMContentLoaded', function() {
  const decodeButton = document.getElementById('decodeButton');
  const inputField = document.getElementById('urlInput');
  const resultContainer = document.getElementById('jsonViewer');  // Контейнер для json-viewer
  const jsonViewer = new JsonViewer();  // Создаем объект JSONViewer
  resultContainer.appendChild(jsonViewer.getContainer());  // Добавляем контейнер для отображения

  // Функция для обработки декодирования ссылки
  function handleDecode() {
    const url = inputField.value;

    if (typeof decodeLink === 'function') {
      const decodedResult = decodeLink(url);  // Функция decodeLink должна быть определена

      // Очищаем предыдущий результат
      resultContainer.innerHTML = '';
      resultContainer.appendChild(jsonViewer.getContainer());

      if (decodedResult) {
        jsonViewer.showJSON(decodedResult, null, 2);  // Отображаем JSON
      } else {
        resultContainer.textContent = 'Ошибка при декодировании.';
      }
    } else {
      resultContainer.textContent = 'Ошибка: функция декодирования не найдена.';
    }
  }

  // Событие нажатия кнопки "Декодировать ссылку"
  decodeButton.addEventListener('click', handleDecode);

  // Перехват нажатия клавиши Enter в поле ввода
  inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();  // Блокируем стандартное поведение отправки формы
      handleDecode();  // Вызываем логику декодирования
    }
  });
});
