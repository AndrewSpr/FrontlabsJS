// 1

if ("0") {
    alert('Привіт'); // Так, буде показано alert, оскільки рядок "0" конвертується в true
  }
 
//2

let userInput = prompt('Яка "офіційна" назва JavaScript?', '');

//3

if (userInput === 'ECMAScript') {
  alert('Правильно!');
} else {
  alert('Ви не знаєте? ECMAScript!');
}

//4

let number = prompt('Введіть число:', 0);

if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}

//5

let result = (a + b < 4) ? 'Нижче' : 'Вище';

//6

let message = (login == 'Працівник') ? 'Привіт' :
              (login == 'Директор') ? 'Вітаю' :
              (login == '') ? 'Немає логіну' :
              '';

