function showMessage(message) {
    console.log(message);
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    }
}

function updateH1FromUTM() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1Element = document.querySelector('.main-heading');

    if (utmTerm) {
        h1Element.textContent = utmTerm;
    } else {
        h1Element.textContent = "Добро пожаловать на наш сайт!"; // Default text
    }
}

function logCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;  // Исправлено на использование обратных кавычек
    console.log("Текущее время:", timeString);
}


// Вызов функций:
showMessage("Скрипт загружен!");
logCurrentTime();


function showMessage(message) {
    console.log(message);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    }
}

function updateH1FromUTM() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1Element = document.querySelector('.main-heading');

    if (utmTerm) {
        h1Element.textContent = utmTerm;
    } else {
        h1Element.textContent = "Добро пожаловать на наш сайт!"; // Default text
    }
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

document.addEventListener('DOMContentLoaded', function() {
    changeBackgroundColor('lightblue');
    toggleVisibility('.content'); // Убедитесь, что в вашем HTML есть элемент с классом "content"
    updateH1FromUTM(); // Исправлено имя функции
    setTimeout(resetBackgroundColor, 3000);
});


document.addEventListener('DOMContentLoaded', function() {
    // Click handler for H1
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.addEventListener('click', () => alert('Вы кликнули на заголовок - так держать!'));
    }

    // Button for second semester practices
    const semester2Button = document.createElement('button');
    semester2Button.textContent = 'Посмотреть практики второго семестра';

    const lecturesHeader = document.querySelector('h3:nth-of-type(1)'); // Находим заголовок "Лекции"
    if (lecturesHeader) {
        lecturesHeader.insertAdjacentElement('afterend', semester2Button); // Добавляем кнопку после заголовка "Лекции"
    }

    const semester2Topics = [
        "Базовое бэкенд-приложение",
        "HTTP-запросы",
        "JSON и работа с ним",
        "HTTP-ответы",
        "Проектирование API",
        "Роутинг и его настройка",
        "NoSQL базы данных",
        "Обеспечение авторизации и доступа пользователей",
        "Работа сторонних сервисов уведомления и авторизации",
        "Основы ReactJS",
        "Работа с компонентами динамической DOM",
        "Использование хуков в React",
        "Основы микросервисной архитектуры",
        "Разработка классических модулей веб-приложений",
        "Разработка классических модулей веб-приложений"
    ];

    const practiceTable = document.querySelector('table');
    if (practiceTable) {
        semester2Button.addEventListener('click', () => {
            const tbody = practiceTable.tBodies[0];
            tbody.innerHTML = '';

            for (let i = 0; i < semester2Topics.length; i++) {
                let row = tbody.insertRow();
                let cell1 = row.insertCell();
                let cell2 = row.insertCell();
                cell1.textContent = i + 1;
                cell2.textContent = semester2Topics[i];
            }
        });
    }

    // Student photo handlers
    const studentPhoto = document.querySelector('.student-photo');
    if (studentPhoto) {
        let originalWidth = studentPhoto.offsetWidth;
        let originalHeight = studentPhoto.offsetHeight;

        studentPhoto.addEventListener('mouseover', () => {
            studentPhoto.style.width = `${originalWidth * 1.1}px`;
            studentPhoto.style.height = `${originalHeight * 1.1}px`;
        });

        studentPhoto.addEventListener('mouseout', () => {
            studentPhoto.style.width = `${originalWidth}px`;
            studentPhoto.style.height = `${originalHeight}px`;
        });

        studentPhoto.addEventListener('click', () => {
            studentPhoto.src = 'teacher.jpg';
        });

        studentPhoto.addEventListener('dblclick', () => {
            alert('Не налегай, у меня не так много любимых преподавателей');
        });
    }
});

document.querySelector('.text-paragraph').addEventListener('click', function() {
    this.classList.toggle('clicked');
  });
  
  document.querySelector('.animated-form').addEventListener('submit', function(event) {
    event.preventDefault();
    this.classList.add('submitted');
    setTimeout(() => this.classList.remove('submitted'), 1500); //Remove after 1.5 seconds
    alert('Форма отправлена!');
  });
  
  // Add a button to show the lectures table
  const showLecturesButton = document.createElement('button');
  showLecturesButton.textContent = 'Показать Лекции';
  showLecturesButton.classList.add('show-lectures-button');
  document.body.appendChild(showLecturesButton);

const photo = document.querySelector('.animated-photo');

if (photo) {
    let originalTransform = photo.style.transform; //Important: Preserve the initial transform
  
    photo.addEventListener('mouseover', () => {
      photo.style.transform = 'rotate(360deg)'; //Start animation immediately
      
    });
  
    photo.addEventListener('mouseout', () => {
      photo.style.transform = originalTransform; //Restore original transform
      photo.style.animation = ""; // Stop the animation
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleLecturesBtn');
    const lectureTable = document.querySelector('table');

    if (toggleButton && lectureTable) {
        toggleButton.addEventListener('click', () => {
            if (lectureTable.classList.contains('hidden')) {
                lectureTable.classList.remove('hidden');
                lectureTable.classList.add('visible');
                toggleButton.textContent = 'Скрыть лекции';
            } else {
                lectureTable.classList.remove('visible');
                lectureTable.classList.add('hidden');
                toggleButton.textContent = 'Показать лекции';
            }
        });
    }
});