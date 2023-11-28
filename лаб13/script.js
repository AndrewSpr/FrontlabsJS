// 1
function showCurrentDate() {
  let currentDate = new Date();

  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric'
  };

  let formattedDate = currentDate.toLocaleString('uk-UA', options);
  document.getElementById('currentDateResult').innerText = formattedDate;
}

// 2

function displayFormattedDate() {
  let userInput = document.getElementById('userDateInput').value;
  let userDate = parseUserDate(userInput);
  let currentDate = new Date();

  if (isToday(userDate, currentDate)) {
    document.getElementById('formattedDateResult').innerText = 'Сьогодні';
  } else if (isYesterday(userDate, currentDate)) {
    document.getElementById('formattedDateResult').innerText = 'Вчора';
  } else if (isWithinAWeek(userDate, currentDate)) {
    let daysAgo = calculateDaysAgo(userDate, currentDate);
    document.getElementById('formattedDateResult').innerText = `${daysAgo} дні тому`;
  } else if (isWithinAYear(userDate, currentDate)) {
    document.getElementById('formattedDateResult').innerText = 'Тиждень тому';
  } else if (isLastYear(userDate, currentDate)) {
    document.getElementById('formattedDateResult').innerText = 'Рік тому';
  } else {
    document.getElementById('formattedDateResult').innerText = formatDate(userDate);
  }
}

function parseUserDate(input) {
  let dateParts = input.match(/(\d{1,2})[./-](\d{1,2})[./-](\d{4})/);
  return dateParts ? new Date(dateParts[3], dateParts[2] - 1, dateParts[1]) : null;
}

function isToday(date, currentDate) {
  return date.toDateString() === currentDate.toDateString();
}

function isYesterday(date, currentDate) {
  let yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);
  return date.toDateString() === yesterday.toDateString();
}

function isWithinAWeek(date, currentDate) {
  let diffInDays = (currentDate - date) / (1000 * 60 * 60 * 24);
  return diffInDays >= 2 && diffInDays <= 6;
}

function calculateDaysAgo(date, currentDate) {
  let diffInDays = (currentDate - date) / (1000 * 60 * 60 * 24);
  return Math.floor(diffInDays);
}

function isWithinAYear(date, currentDate) {
  return currentDate.getFullYear() === date.getFullYear();
}

function isLastYear(date, currentDate) {
  return currentDate.getFullYear() - date.getFullYear() === 1;
}

function formatDate(date) {
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  return `${year}.${month}.${day}`;
}