function numberToText(number) {
    const units = ['', 'один', 'два', 'три', 'чотири', 'п\'ять', 'шість', 'сім', 'вісім', 'дев\'ять'];
    const teens = ['десять', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п\'ятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'дев\'ятнадцять'];
    const tens = ['', '', 'двадцять', 'тридцять', 'сорок', 'п\'ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев\'яносто'];

    if (number < 10) {
        return units[number];
    } else if (number < 20) {
        return teens[number - 10];
    } else {
        return tens[Math.floor(number / 10)] + ' ' + units[number % 10];
    }
}

const result1 = numberToText(35);
document.getElementById('result1').textContent = `Result: ${result1}`;

function toCamelCase(cssStyle) {
    return cssStyle.replace(/-([a-z])/g, function (match, letter) {
        return letter.toUpperCase();
    });
}

const result2 = toCamelCase("font-size");
document.getElementById('result2').textContent = `Result: ${result2}`;

function toKebabCase(camelCase) {
    return camelCase.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

const result3 = toKebabCase("fontSize");
document.getElementById('result3').textContent = `Result: ${result3}`;

function calculator(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return 'Помилка обчислення';
    }
}

const result4 = calculator("2 + 3");
document.getElementById('result4').textContent = `Result: ${result4}`;

function formatDate(text) {
    return text.replace(/(\d{4})\/(\d{2})\/(\d{2})/g, '$3.$2.$1');
}

const result5 = formatDate("Дата: 2022/01/15 і ще одна 2023/05/20");
document.getElementById('result5').textContent = `Result: ${result5}`;

numberToText();
toCamelCase();
toKebabCase();
calculator();
formatDate();
