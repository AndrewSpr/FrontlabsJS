function printTextWithFontSize(text, fontSize) {
    document.write(`<p style="font-size: ${fontSize}px;">${text}</p>`);
}

printTextWithFontSize("Цей текст має розмір 20px", 20);

function createTableFromStrings(strings) {
    document.write('<table border="1">');
    for (let str of strings) {
        document.write('<tr><td>' + str + '</td></tr>');
    }
    document.write('</table>');
}

createTableFromStrings(["Рядок 1", "Рядок 2", "Рядок 3"]);

function createHeaders(N) {
    for (let i = 1; i <= N; i++) {
        document.write(`<h2>Header${i}</h2>`);
    }
}

createHeaders(5);

function processParams(...params) {
    let sum = 0;
    let maxNum = Number.MIN_SAFE_INTEGER;
    let sentence = "";

    for (let param of params) {
        if (typeof param === 'number') {
            sum += param;
            maxNum = Math.max(maxNum, param);
        } else if (typeof param === 'string') {
            sentence += param + " ";
        }
    }

    console.log("Максимальне число або їх сума:", maxNum > Number.MIN_SAFE_INTEGER ? maxNum : sum);
    console.log("Речення з переданих слів:", sentence.trim());
}

processParams(10, 5, "Hello", 8, "World"); 

