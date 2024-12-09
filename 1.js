function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

window.onclick = function(event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
}

function validateForm(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  if (name === "" || email === "" || phone === "") {
      alert("Пожалуйста, заполните все поля!");
      return false;
  } else {
      alert("Форма успешно отправлена!");
      closeModal();
  }
}

// Объект formData для хранения данных формы
const formData = {
  name: "",
  email: "",
  phone: "",
  date: new Date().toLocaleDateString(), // Сохраняем текущую дату
  comments: "",
  printData: function() {
      console.log(`Имя: ${this.name}`);
      console.log(`E-mail: ${this.email}`);
      console.log(`Телефон: ${this.phone}`);
      console.log(`Дата: ${this.date}`);
      console.log(`Комментарий: ${this.comments}`);
  }
};

// Функция для проверки, что поле не пустое
function isNotEmpty(value) {
  return value.trim() !== "";
}

// Проверка валидности e-mail с помощью регулярного выражения
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Проверка, что телефон содержит только цифры
function isValidPhone(phone) {
  const phoneRegex = /^\d+$/;
  return phoneRegex.test(phone);
}

// Функция для валидации формы и записи данных в formData
function submitForm(event) {
  event.preventDefault(); // Предотвращаем стандартное поведение формы

  // Считываем данные из полей формы
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  
  const comments = document.getElementById("comments").value;

  // Валидация данных
  if (!isNotEmpty(name)) {
      alert("Поле 'Имя' не должно быть пустым!");
      return false;
  }
  if (!isValidEmail(email)) {
      alert("Введите корректный e-mail!");
      return false;
  }
  if (!isValidPhone(phone)) {
      alert("Телефон должен содержать только цифры!");
      return false;
  }
  if (!isNotEmpty(comments)) {
      alert("Поле 'Комментарии' не должно быть пустым!");
      return false;
  }

  // Записываем данные в объект formData
  formData.name = name;
  formData.email = email;
  formData.phone = phone;
  formData.comments = comments;

  // Выводим данные в консоль с помощью метода printData
  formData.printData();

  // Сообщение об успехе
  alert("Форма успешно отправлена!");
  return true;
}

document.getElementById("orderForm").addEventListener("submit", submitForm);

document.addEventListener("DOMContentLoaded", function () {
    // Найти форму по ID
    const orderForm = document.querySelector("form");

    // Добавить обработчик события "submit"
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Отменить стандартное поведение отправки формы

        // Создать сообщение
        const message = document.createElement("p");
        message.textContent = "Форма отправлена!";
        message.style.color = "purple";
        message.style.fontSize = "1.5rem";
        message.style.fontWeight = "bold";
        message.style.opacity = "0";
        message.style.transition = "opacity 1s ease-in-out";

        // Вставить сообщение перед кнопкой отправки
        const submitButton = orderForm.querySelector("button[type='submit']");
        orderForm.insertBefore(message, submitButton);

        // Запуск анимации (плавное появление текста)
        setTimeout(() => {
            message.style.opacity = "1";
        }, 100);

        // Удалить сообщение через 3 секунды
        setTimeout(() => {
            message.remove();
        }, 5000);

        // Сбросить значения формы
        orderForm.reset();
    });
});
